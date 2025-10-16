import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5176;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/goCart-agent', async (req, res) => {
  try {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    console.log('Processing query:', query);
    
    // Extract shopping context from query using simple keyword matching
    const keywords = query.toLowerCase().split(' ');
    const categories = [
      'electronics', 'clothing', 'home', 'kitchen', 'toys', 'books', 
      'sports', 'beauty', 'health', 'automotive', 'grocery', 'office'
    ];
    
    let category = 'general';
    for (const keyword of keywords) {
      if (categories.includes(keyword)) {
        category = keyword;
        break;
      }
    }

    // Fetch products for the query
    const apiKey = process.env.VITE_SERPAPI_KEY || process.env.SERPAPI_KEY;
    
    if (!apiKey) {
      throw new Error('SERP API key not configured. Please set VITE_SERPAPI_KEY in your .env file');
    }

    const url = `https://serpapi.com/search.json?engine=walmart&query=${encodeURIComponent(query)}&api_key=${apiKey}&num=20`;
    
    let products = [];
    try {
      console.log('Fetching real products from SERP API for:', query);
      const response = await axios.get(url);
      const data = response.data;
      
      if (data.error) {
        throw new Error(`SERP API Error: ${data.error}`);
      }
      
      if (data.organic_results && data.organic_results.length > 0) {
        products = data.organic_results.map((item, idx) => ({
          id: item.product_id || item.position?.toString() || `pos-${idx}`,
          name: item.title || 'Product',
          price: item.primary_offer?.offer_price || 
                 item.price || 
                 (item.extracted_price ? parseFloat(item.extracted_price) : 0),
          image_url: item.thumbnail || 'https://via.placeholder.com/300x300?text=No+Image',
          brand: item.seller_name || item.brand || 'Generic',
          description: item.snippet || item.title || 'No description available',
          rating: item.rating || 0,
          review_count: item.reviews || 0,
          source: 'walmart'
        }));
        console.log(`Successfully fetched ${products.length} real products`);
      } else if (data.shopping_results && data.shopping_results.length > 0) {
        console.log('Using shopping_results as fallback...');
        products = data.shopping_results.map((item, idx) => ({
          id: item.product_id || item.position?.toString() || `shop-${idx}`,
          name: item.title || 'Product',
          price: item.extracted_price ? parseFloat(item.extracted_price) : 0,
          image_url: item.thumbnail || 'https://via.placeholder.com/300x300?text=No+Image',
          brand: item.source || 'Generic',
          description: item.snippet || item.title || 'No description available',
          rating: item.rating || 0,
          review_count: item.reviews || 0,
          source: 'walmart'
        }));
        console.log(`Successfully fetched ${products.length} products from shopping_results`);
      } else {
        throw new Error('No products found for your search query');
      }
    } catch (apiError) {
      console.error('SERP API Error:', apiError.message);
      throw apiError; // Re-throw the actual error instead of wrapping it
    }
    
    const response = {
      message: `Found ${products.length} products for "${query}"`,
      products: products.slice(0, 12), // Limit to 12 products
      query: query,
      category: category
    };

    res.json(response);
  } catch (error) {
    console.error('Error processing goCart agent request:', error);
    res.status(500).json({ 
      error: 'Failed to process request',
      message: error.message,
      products: []
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`goCart Agent Server running on http://localhost:${PORT}`);
  console.log('Environment variables loaded:');
  console.log('- VITE_SERPAPI_KEY:', process.env.VITE_SERPAPI_KEY ? '✓ Set' : '✗ Missing');
  console.log('- SERPAPI_KEY:', process.env.SERPAPI_KEY ? '✓ Set' : '✗ Missing');
});

export default app;