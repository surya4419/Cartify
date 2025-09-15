import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.VITE_SERPAPI_KEY;

console.log('Testing SERP API...');
console.log('API Key configured:', !!apiKey);

if (!apiKey) {
  console.error('❌ No API key found in environment');
  process.exit(1);
}

const url = `https://serpapi.com/search.json?engine=walmart&query=iPhone&api_key=${apiKey}&num=5`;

console.log('Making API call to:', url.replace(apiKey, '***'));

try {
  const response = await axios.get(url);
  const data = response.data;
  
  console.log('✅ API Response received');
  console.log('Status:', response.status);
  console.log('Organic results:', data.organic_results?.length || 0);
  console.log('Shopping results:', data.shopping_results?.length || 0);
  
  if (data.organic_results && data.organic_results.length > 0) {
    console.log('\n📱 First product:', {
      title: data.organic_results[0].title,
      price: data.organic_results[0].primary_offer?.offer_price || data.organic_results[0].price,
      brand: data.organic_results[0].brand || data.organic_results[0].seller_name
    });
  } else if (data.shopping_results && data.shopping_results.length > 0) {
    console.log('\n📱 First shopping result:', {
      title: data.shopping_results[0].title,
      price: data.shopping_results[0].extracted_price,
      source: data.shopping_results[0].source
    });
  } else {
    console.log('⚠️ No products found in response');
    console.log('Available keys:', Object.keys(data));
  }
} catch (error) {
  console.error('❌ API Error:', error.response?.data || error.message);
}