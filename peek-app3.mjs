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

// 1. Page d'ajout (bouton +) — depuis Inventory
await page.goto('https://tieproject.base44.app/Inventory', { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

// Click the + button (central FAB)
const addBtn = await page.$('button[class*="rounded-full"], button[aria-label*="add"], button[aria-label*="Add"]');
if (addBtn) {
  await addBtn.click();
} else {
  // Try clicking the + in the bottom nav center
  const btns = await page.$$('button');
  for (const btn of btns) {
    const txt = await page.evaluate(el => el.textContent?.trim(), btn);
    if (txt === '+' || txt?.includes('+')) { await btn.click(); break; }
  }
}
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: 'public/screenshots/real-add-product.png' });
const addText = await page.evaluate(() => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const texts = []; let node;
  while (node = walker.nextNode()) { const t = node.textContent.trim(); if (t.length > 1) texts.push(t); }
  return texts.join(' | ');
});
console.log('=== ADD PRODUCT PAGE ===');
console.log(addText.substring(0, 2000));

// 2. Page Recettes → Générer
await page.goto('https://tieproject.base44.app/Recipes', { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

// Click "Générer des recettes"
const genBtn = await page.$('button');
const allBtns = await page.$$('button');
for (const btn of allBtns) {
  const txt = await page.evaluate(el => el.textContent?.trim(), btn);
  if (txt?.includes('nerer') || txt?.includes('ecette')) {
    await btn.click();
    break;
  }
}
await new Promise(r => setTimeout(r, 4000));
await page.screenshot({ path: 'public/screenshots/real-recipes-generated.png' });
const recText = await page.evaluate(() => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const texts = []; let node;
  while (node = walker.nextNode()) { const t = node.textContent.trim(); if (t.length > 1) texts.push(t); }
  return texts.join(' | ');
});
console.log('\n=== RECIPES GENERATED ===');
console.log(recText.substring(0, 3000));

// 3. Dashboard full scroll
await page.goto('https://tieproject.base44.app/Dashboard', { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: 'public/screenshots/real-dashboard-full.png', fullPage: true });

await browser.close();
console.log('\nDone.');
