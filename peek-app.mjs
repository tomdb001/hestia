import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
  headless: true,
  defaultViewport: { width: 1400, height: 900, deviceScaleFactor: 2 },
});

const page = await browser.newPage();

// Capture console logs
page.on('console', msg => {});

await page.goto('https://tieproject.base44.app/Dashboard', { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 3000));

// Take full screenshot
await page.screenshot({ path: 'public/screenshots/real-app.png', fullPage: false });

// Extract all visible text
const text = await page.evaluate(() => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const texts = [];
  let node;
  while (node = walker.nextNode()) {
    const t = node.textContent.trim();
    if (t.length > 1) texts.push(t);
  }
  return texts.join('\n');
});

console.log('=== VISIBLE TEXT ===');
console.log(text.substring(0, 3000));

await browser.close();
