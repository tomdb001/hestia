import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
  headless: true,
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2 },
});

const page = await browser.newPage();

const pages = [
  { url: 'https://tieproject.base44.app/Inventory', file: 'real-inventory.png' },
  { url: 'https://tieproject.base44.app/Recipes', file: 'real-recipes.png' },
];

for (const p of pages) {
  await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: `public/screenshots/${p.file}` });
  const text = await page.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const texts = [];
    let node;
    while (node = walker.nextNode()) {
      const t = node.textContent.trim();
      if (t.length > 1) texts.push(t);
    }
    return texts.join(' | ');
  });
  console.log(`=== ${p.file} ===`);
  console.log(text.substring(0, 2000));
  console.log('');
}

await browser.close();
