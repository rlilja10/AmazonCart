//file that works in tangent with Amazon_product_scrapper.js to find the price of a product
//if given the URL, breaks if the URL is not correct and if Amazon changes the ID of the 
//span element. Used to test if scrapping from Amazon server-side works
//To run file, go to the working directory for the project in Terminal and type "npm run 
//dev", detailed command can be accessed by typing "vi package.json"


import { getHTML, getAmazonPrice } from './Amazon_product_scrapper.js';

const productURL = `https://www.amazon.com/Chocolate-Cookie-Valentines-Baskets-Thanksgiving/dp/B0081BE3E4?ref_=Oct_BSellerC_2255576011_0&pf_rd_p=9ac8ba87-e3d6-5942-a139-bdaec063908f&pf_rd_s=merchandised-search-6&pf_rd_t=101&pf_rd_i=2255576011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=DEHR4MSNGBBW5ZCJ2JAP&pf_rd_r=DEHR4MSNGBBW5ZCJ2JAP&pf_rd_p=9ac8ba87-e3d6-5942-a139-bdaec063908f`;

async function scrapePage() {
  const html = await getHTML(productURL);
  const amazonPrice = await getAmazonPrice(html);
  console.log(`The price is ${amazonPrice}`);
}

scrapePage();