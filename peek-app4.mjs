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

// 1. Click the FAB + from Dashboard
await page.goto('https://tieproject.base44.app/Dashboard', { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

// Find the center + FAB button (usually fixed at bottom center)
const fabClicked = await page.evaluate(() => {
  const buttons = [...document.querySelectorAll('button')];
  for (const btn of buttons) {
    const style = window.getComputedStyle(btn);
    const rect = btn.getBoundingClientRect();
    const text = btn.textContent?.trim();
    // Look for a button near center bottom with + text or rounded-full style
    if ((text === '+' || btn.innerHTML.includes('Plus') || btn.classList.toString().includes('rounded-full')) && rect.top > 600) {
      btn.click();
      return { found: true, text, rect: { top: rect.top, left: rect.left } };
    }
  }
  // Also try clicking at center bottom position
  return { found: false };
});
console.log('FAB click result:', JSON.stringify(fabClicked));

// Try clicking at approximate position of FAB (center, near bottom)
await page.mouse.click(195, 760);
await new Promise(r => setTimeout(r, 2500));

await page.screenshot({ path: 'public/screenshots/real-add-page.png' });
const txt1 = await page.evaluate(() => [...document.querySelectorAll('*')].filter(el => el.childElementCount === 0 && el.textContent.trim().length > 1).map(el => el.textContent.trim()).join(' | '));
console.log('\n=== AFTER FAB CLICK ===');
console.log(txt1.substring(0, 2000));

// 2. Recipes - wait for generation to complete
await page.goto('https://tieproject.base44.app/Recipes', { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 2000));

// Click generate
await page.evaluate(() => {
  const buttons = [...document.querySelectorAll('button')];
  const btn = buttons.find(b => b.textContent?.includes('nerer') || b.textContent?.includes('Recette'));
  if (btn) btn.click();
});
await new Promise(r => setTimeout(r, 6000));
await page.screenshot({ path: 'public/screenshots/real-recipes-done.png', fullPage: false });

const txt2 = await page.evaluate(() => [...document.querySelectorAll('*')].filter(el => el.childElementCount === 0 && el.textContent.trim().length > 1).map(el => el.textContent.trim()).join(' | '));
console.log('\n=== RECIPES GENERATED (waited 6s) ===');
console.log(txt2.substring(0, 3000));

await browser.close();
