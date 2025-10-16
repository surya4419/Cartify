import axios from "axios";

export interface SerpApiProduct {
  title: string
  price: number
  thumbnail: string
  link: string
  rating?: number
  reviews?: number
  source?: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category_id: string
  stock_quantity: number
  rating: number
  review_count: number
  brand: string
  sku?: string
  is_featured?: boolean
}

export async function fetchProducts(query: string, page: number = 1): Promise<Product[]> {
  const apiKey = import.meta.env.VITE_SERPAPI_KEY;
  
  if (!apiKey) {
    console.error('SERP API key not found. Please set VITE_SERPAPI_KEY in your .env file');
    throw new Error('SERP API key not configured');
  }

  const url = `https://serpapi.com/search.json?engine=walmart&query=${encodeURIComponent(query)}&api_key=${apiKey}&num=20&page=${page}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    
    if (!data.organic_results || data.organic_results.length === 0) {
      console.warn('No products found for query:', query);
      return [];
    }

    const results = data.organic_results;
    
    return results.map((item: any, idx: number) => ({
      id: item.product_id || item.position?.toString() || `${page}-${idx}`,
      name: item.title || 'Product',
      description: item.snippet || item.title || 'No description available',
      price: item.primary_offer?.offer_price || 
             item.price || 
             (item.extracted_price ? parseFloat(item.extracted_price) : 0),
      image_url: item.thumbnail || 'https://via.placeholder.com/300x300?text=No+Image',
      category_id: item.category || 'general',
      stock_quantity: item.out_of_stock ? 0 : Math.floor(Math.random() * 100) + 10,
      rating: item.rating || Math.floor(Math.random() * 5) + 3,
      review_count: item.reviews || Math.floor(Math.random() * 500) + 10,
      brand: item.seller_name || item.brand || 'Generic',
      sku: item.us_item_id || undefined,
      is_featured: false
    }));
  } catch (error: any) {
    console.error('Error fetching from SERP API:', error.message);
    
    // Fallback to mock data if API fails
    console.log('Using fallback mock data');
    return generateMockProducts(query);
  }
}

function generateMockProducts(query: string): Product[] {
  const mockProducts: Product[] = [
    {
      id: 'mock-1',
      name: `${query} - Premium Item`,
      description: `High-quality ${query} for your needs`,
      price: 29.99,
      image_url: 'https://via.placeholder.com/300x300?text=Premium+Product',
      category_id: 'general',
      stock_quantity: 50,
      rating: 4.5,
      review_count: 234,
      brand: 'Premium Brand',
      is_featured: true
    },
    {
      id: 'mock-2',
      name: `${query} - Standard Item`,
      description: `Reliable ${query} at great value`,
      price: 19.99,
      image_url: 'https://via.placeholder.com/300x300?text=Standard+Product',
      category_id: 'general',
      stock_quantity: 100,
      rating: 4.2,
      review_count: 156,
      brand: 'Standard Brand'
    },
    {
      id: 'mock-3',
      name: `${query} - Budget Item`,
      description: `Affordable ${query} without compromise`,
      price: 12.99,
      image_url: 'https://via.placeholder.com/300x300?text=Budget+Product',
      category_id: 'general',
      stock_quantity: 75,
      rating: 3.8,
      review_count: 89,
      brand: 'Budget Brand'
    }
  ];
  
  return mockProducts;
}