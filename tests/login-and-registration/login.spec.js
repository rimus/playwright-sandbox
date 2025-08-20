import { test, expect } from '@playwright/test';

import { LoginPage } from '../../core/ui/pages/login.page.js';
import { UserFactory } from '../../core/models/user-factory.js';

test.describe('Login flow', () => {
  test('registered user can log in to shop', async ({ page }) => {
    const user = UserFactory.getDefaultUser();

    await page.goto('/');
    const loginPage = new LoginPage(page);

    await loginPage.header.goToLogin();
    await loginPage.login(user.email, user.password);
    await page.waitForURL(/customer_token/);
    await expect(loginPage.rightAccordion.logoutLink).toBeVisible();
  });
});
