import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'public', 'screenshots');

const screens = ['dashboard', 'inventory', 'alerts', 'recipes'];

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
  defaultViewport: { width: 1400, height: 900, deviceScaleFactor: 2 },
});

const page = await browser.newPage();
await page.goto('http://localhost:3000/screenshots', { waitUntil: 'networkidle0', timeout: 15000 });
await new Promise(r => setTimeout(r, 1500));

import { mkdirSync } from 'fs';
mkdirSync(OUT, { recursive: true });

for (const id of screens) {
  const el = await page.$(`#${id}`);
  if (!el) { console.error(`Element #${id} not found`); continue; }
  const out = path.join(OUT, `${id}.png`);
  await el.screenshot({ path: out, omitBackground: false });
  console.log(`✓ ${id}.png`);
}

await browser.close();
console.log('\nDone → public/screenshots/');
