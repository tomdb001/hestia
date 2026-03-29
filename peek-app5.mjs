import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

mkdirSync('public/screenshots', { recursive: true });

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox'],
  headless: true,
  defaultViewport: { width: 390, height: 844, deviceScaleFactor: 2 },
});

const page = await browser.newPage();

// Try possible routes for "add product"
const routes = [
  'https://tieproject.base44.app/AddProduct',
  'https://tieproject.base44.app/add-product',
  'https://tieproject.base44.app/Add',
  'https://tieproject.base44.app/NewProduct',
];

for (const route of routes) {
  await page.goto(route, { waitUntil: 'networkidle0', timeout: 8000 }).catch(() => {});
  await new Promise(r => setTimeout(r, 1500));
  const url = page.url();
  const hasContent = await page.evaluate(() => document.body.innerText.length > 100);
  console.log(route, '→', url, '| content:', hasContent);
  if (hasContent && !url.includes('Dashboard')) {
    await page.screenshot({ path: `public/screenshots/real-add-found.png` });
    const text = await page.evaluate(() => [...document.querySelectorAll('label, input, select, button, h1, h2, h3, p')].map(el => el.textContent?.trim()).filter(Boolean).join(' | '));
    console.log(text.substring(0, 1000));
  }
}

// Try clicking the + FAB via React internals
await page.goto('https://tieproject.base44.app/Inventory', { waitUntil: 'networkidle0', timeout: 15000 });
await new Promise(r => setTimeout(r, 2000));

// Find all clickable elements and their positions
const elements = await page.evaluate(() => {
  return [...document.querySelectorAll('button, [role="button"], a')].map(el => ({
    tag: el.tagName,
    text: el.textContent?.trim().substring(0, 50),
    classes: el.className?.toString().substring(0, 100),
    rect: el.getBoundingClientRect(),
  })).filter(e => e.rect.width > 0);
});

console.log('\n=== ALL CLICKABLE ELEMENTS ===');
elements.forEach(e => console.log(JSON.stringify(e)));

await browser.close();
