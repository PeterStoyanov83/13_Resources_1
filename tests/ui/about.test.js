const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const heading = await page.$('h1');
  expect(heading).not.toBeNull(); // Ensure heading exists
  const text = await heading.textContent();
  expect(text).toBe('About my shopping list');
});

test('Check about page test', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const paragraph = await page.$('p');
  expect(paragraph).not.toBeNull(); // Ensure paragraph exists
  const text = await paragraph.textContent();
  expect(text).toBe('This is my shopping list');
});
