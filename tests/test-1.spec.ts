import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://playwright.dev/docs/codegen-intro
  await page.goto('https://playwright.dev/docs/codegen-intro');

  // Click text=CI Github Actions
  await page.locator('text=CI Github Actions').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/ci-intro');

  // Click text=How to use GitHub Actions to run your tests
  await page.locator('text=How to use GitHub Actions to run your tests').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/ci-intro#github-actions');

  // Click text=Parallelism and sharding
  await page.locator('text=Parallelism and sharding').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/test-parallel');

  // Click text=To disable parallelism limit the number of workers to one. >> strong
  await page.locator('text=To disable parallelism limit the number of workers to one. >> strong').click();

});