const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let myName = 's'

rl.question('Please enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  myName = name
  console.log(myName);
  
  rl.close();
});

  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });


  // const num = await page.evaluate(() => {
  //   return prompt('How many articles to save?', 10); 
  // });

  // let numArticles = 10;

  // rl.question('Please enter number of top articles to save:', (num) => {
  //   numArticles = num;
  //   rl.close();
  // });

  // if (num === null) {
  //   // User cancelled the prompt, do nothing
  //   console.log('User cancelled the operation.');
  //   await browser.close();
  //   return;
  // }

  // let numArticlesToSave = parseInt(num, 10);

    // let num = parseInt(numArticles, 10);

    const { writeFileSync } = require("fs");
const { chromium } = require("playwright");

async function extractArticles(page, url) {
  await page.goto(url);
  await page.waitForSelector('.athing');

  const articles = await page.$$eval('.athing', (links) => {
    return links.slice(0, 10).map((link) => {
      const urlLink = link.querySelector('.titleline a');
      return {
        title: link.textContent.replace(/,/g, ''),
        url: urlLink.getAttribute('href'),
      };
    });
  });

  return articles.map((article) => {
    return `${article.title}, ${article.url}`;
  });
}

async function saveHackerNewsArticles() {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();

  const urls = [
    "https://news.ycombinator.com",
    "https://news.ycombinator.com/newest",
    "https://news.ycombinator.com/front"
  ];

  const fetchPromises = urls.map(async (url) => {
    return extractArticles(page, url);
  });

  const [topNews, newest, pastArticles] = await Promise.all(fetchPromises);

  const csvData = `Top 10 News Article Titles, URL\n${topNews.join('\n')}\n\n10 Newest Article Titles, URL\n${newest.join('\n')}\n\nTop 10 News Article Titles from Yesterday, URL\n${pastArticles.join('\n')}`;

  try {
    writeFileSync('hacker_news_top_10.csv', csvData);
    console.log('Top 10 news articles, 10 newest articles, and top 10 past articles, saved to hacker_news_top_10.csv');
  } catch (err) {
    console.error('An error occurred:', err);
  }

  await browser.close();
}

(async () => {
  await saveHackerNewsArticles();
})();
