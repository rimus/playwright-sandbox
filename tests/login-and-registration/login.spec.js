import { test, expect } from '@playwright/test';

import { UserFactory } from '../../core/models/user-factory.js';
import { LoginPage } from '../../core/screens/pages/login.page.js';

test.describe('Login flow', () => {
  test('registered user can log in to shop', async ({ page }) => {
    const user = UserFactory.getDefaultUser();

    await page.goto('/');
    const loginPage = new LoginPage(page);

    await loginPage.header.goToLogin();
    await loginPage.login(user);
    await expect(loginPage.rightAccordion.logoutLink).toBeVisible();
  });
});
