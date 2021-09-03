const puppeteer = require('puppeteer');

(async () => {
  // create task without any input anything
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/create-task'); //open create task page

  await page.click('#btn-submit'); //click submit button

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();

(async () => {
  // input start date less than today date
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const today = new Date();
  const yesterday = new Date().setDate(today.getDate() - 1);
  await page.goto('https://example.com/create-task'); //open create task page

  await page.type('#startDate', yesterday); //input yesterday date on start date

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();

(async () => {
  // input end date less than start date
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const today = new Date();
  const tomorrow = new Date().setDate(today.getDate() + 1);
  await page.goto('https://example.com/create-task'); //open create task page

  await page.type('#startDate', tomorrow); //input tomorrow date on start date

  await page.type('#endDate', today); //input today date on end date

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();

(async () => {
  // score weight can be set to minus or not
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/create-task'); //open create task page

  await page.type('.scoreWeight', -1);

  await browser.close();
})();

(async () => {
  // score weight can be set to greater than 100
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/create-task'); //open create task page

  await page.type('.scoreWeight', 101);

  await browser.close();
})();

(async () => {
  // check on all multi checkbox
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/create-task'); //open create task page

  await page.$$eval('input[name=multi-checkbox]', (checks) =>
    checks.forEach((check) => (check.checked = true))
  );

  await browser.close();
})();
