// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/GitLab/);
});

test('has GitLab in the body', async ({ page }) => {
  await page.goto('/');

  const isVisible = await page.locator('p:has-text("deploying this simple app with GitLab")').isVisible();
  expect(isVisible).toBeTruthy();
});

test('has expected app version', async ({ page }) => {
  await page.goto('/');

  const expectedAppVersion = process.env.VITE_APP_VERSION ? process.env.VITE_APP_VERSION : '1';
  const isVisible = await page.locator(`p:has-text("Application version: ${expectedAppVersion}")`).isVisible();
  expect(isVisible).toBeTruthy();
});