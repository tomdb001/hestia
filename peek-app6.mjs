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

// Recipes - click generate and wait 12 seconds for AI
await page.goto('https://tieproject.base44.app/Recipes', { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

// Hide the Base44 badge
await page.evaluate(() => {
  document.querySelectorAll('[data-base44], iframe, [id*="base44"]').forEach(el => el.style.display = 'none');
});

// Click generate button
await page.evaluate(() => {
  const buttons = [...document.querySelectorAll('button')];
  const btn = buttons.find(b => b.textContent?.includes('nerer') || b.textContent?.includes('Générer'));
  console.log('btn found:', btn?.textContent);
  if (btn) btn.click();
});

// Wait for generation
await new Promise(r => setTimeout(r, 12000));

await page.screenshot({ path: 'public/screenshots/real-recipes-done.png' });
const text = await page.evaluate(() => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const texts = []; let node;
  while (node = walker.nextNode()) { const t = node.textContent.trim(); if (t.length > 1) texts.push(t); }
  return texts.join(' | ');
});
console.log('=== RECIPES GENERATED ===');
console.log(text.substring(0, 3000));

await browser.close();
