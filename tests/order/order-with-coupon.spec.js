import { test, expect } from '@playwright/test';

import { CartPage } from '../../core/ui/pages/cart.page.js';
import { LoginPage } from '../../core/ui/pages/login.page.js';
import { ProductPage } from '../../core/ui/pages/product.page.js';

import { UserFactory } from '../../core/models/user-factory.js';

test.describe('Order with coupon flow', () => {
  test('registered user can use coupon for registered users and unlimited usage', async ({ page }) => {
    const user = UserFactory.getDefaultUser();

    await page.goto('/');
    const loginPage = new LoginPage(page);

    await loginPage.header.goToLogin();
    await loginPage.login(user.email, user.password);
    await page.waitForURL(/customer_token/);
    await loginPage.header.goHome();

    const productLink = page.locator('//div[@class="description"]//a[contains(@href, "product_id=40")]');

    await productLink.click();
    await page.waitForURL(/product_id=40/);

    const productPage = new ProductPage(page);

    await productPage.setQuantity(6);
    await productPage.addToCart();
    await productPage.header.goToCart();

    const cartPage = new CartPage(page);

    await cartPage.clearCart();
  });
});
