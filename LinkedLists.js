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
