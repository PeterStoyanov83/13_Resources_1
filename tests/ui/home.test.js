const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
  await page.goto('http://localhost:8080');
  const homeLink = await page.$('a[href="/"]'); // Corrected the selector
  expect(homeLink).not.toBeNull(); // Ensure the home link exists
  const text = await homeLink.textContent();
  expect(text).toBe('My Shopping List');
});
