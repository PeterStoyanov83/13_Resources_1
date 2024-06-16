const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
  await page.goto('http://localhost:8080/Shopping-list');
  const list = await page.$('dl');
  expect(list).toBeNull();
});
