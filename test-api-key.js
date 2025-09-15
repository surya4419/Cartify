import axios from 'axios';

const apiKey = '6VGj1Be6g2McSoaya85uza9C';

console.log('Testing SERP API key...');

const url = `https://serpapi.com/search.json?engine=walmart&query=iPhone&api_key=${apiKey}&num=3`;

axios.get(url)
  .then(response => {
    console.log('✅ API Key is valid!');
    console.log('Response data:', response.data);
    if (response.data.organic_results) {
      console.log('Products found:', response.data.organic_results.length);
    }
  })
  .catch(error => {
    console.error('❌ API Error:', error.response?.data || error.message);
  });