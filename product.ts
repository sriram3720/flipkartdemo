import axios from 'axios';
import cheerio from 'cheerio';

const searchKeyword = 'macbook';
const searchUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(searchKeyword)}`;

async function fetchProductDetails() {
  try {
    const response = await axios.get(searchUrl);
    const $ = cheerio.load(response.data);

    // Extract product details
    const productTitle = $('._4rR01T').text().trim();
    const productPrice = $('._30jeq3._1_WHN1').text().trim();
    const sellerName = $('._2WkVRV').text().trim();
    const productDetails = $('._1AtVbE').text().trim();

    console.log('Product Name:', productTitle);
    console.log('Price:', productPrice);
    console.log('Seller Name:', sellerName);
    console.log('Product Details:', productDetails);
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
}

fetchProductDetails();

