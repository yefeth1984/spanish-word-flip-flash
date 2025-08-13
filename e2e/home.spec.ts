import { test, expect } from '@playwright/test';

test('homepage loads and shows title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/spanish-word-flip-flash/i);
  await expect(page.getByRole('heading', { name: /Essential Spanish Words/i })).toBeVisible();
});


