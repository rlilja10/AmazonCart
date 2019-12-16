//file that works in tangent with Amazon_product_scrapper.js to find the price of a product
//if given the URL, breaks if the URL is not correct and if Amazon changes the ID of the 
//span element. Used to test if scrapping from Amazon server-side works
//To run file, go to the working directory for the project in Terminal and type "npm run 
//dev", detailed command can be accessed by typing "vi package.json"


import { getHTML, getAmazonPrice } from './Amazon_product_scrapper.js';

const productURL = `https://www.amazon.com/Jack-Links-Jerky-Multipack-Teriyaki/dp/B07NR396XP/ref=sr_1_1_sspa?keywords=beef+jerky&qid=1575611710&smid=ATVPDKIKX0DER&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzRDBPSUVMV0g0QkgyJmVuY3J5cHRlZElkPUEwMjkxNzg4Mk9aRFAyVkRORDhQSyZlbmNyeXB0ZWRBZElkPUEwNDk2NzAyOUJYWVNPVVFGQ1lWJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==`;

async function scrapePage() {
  const html = await getHTML(productURL);
  const amazonPrice = await getAmazonPrice(html);
  console.log(`The price is ${amazonPrice}`);
}

scrapePage();