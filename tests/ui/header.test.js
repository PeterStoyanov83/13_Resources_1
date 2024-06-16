const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const homeLink = await page.$('a[href="/"]');
  expect(homeLink).not.toBeNull();
  const text = await homeLink.textContent();
  expect(text).toBe('My Shopping List');
});
