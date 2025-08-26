import { test, expect } from '@playwright/test';

import { CouponFactory } from '../../core/models/coupon-factory.js';
import { UserFactory } from '../../core/models/user-factory.js';
import { CartPage } from '../../core/screens/pages/cart.page.js';
import { LoginPage } from '../../core/screens/pages/login.page.js';
import { ProductPage } from '../../core/screens/pages/product.page.js';

test.describe('Order with coupon flow', () => {
  test('registered user can use coupon for registered users and unlimited usage', async ({ page }) => {
    const user = UserFactory.getDefaultUser();

    await page.goto('/');
    const loginPage = new LoginPage(page);

    await loginPage.header.goToLogin();
    await loginPage.login(user);
    await loginPage.header.goHome();

    const productLink = page.locator('//div[@class="description"]//a[contains(@href, "product_id=40")]');

    await productLink.click();
    await page.waitForURL(/product_id=40/);

    const productPage = new ProductPage(page);

    await productPage.setQuantity(6);
    await productPage.addToCart();
    await productPage.header.goToCart();

    let cartPage = new CartPage(page);

    const subTotalBeforeCouponUsage = await cartPage.getSubTotalValue();
    const totalBeforeCouponUsage = await cartPage.getTotalValue();

    await cartPage.expandCouponOptions();
    await cartPage.useCoupon(CouponFactory.getPercentDiscountUnlimitedCouponForRegisteredUsers());

    const subTotalAfterCouponUsage = await cartPage.getSubTotalValue();
    const totalAfterCouponUsage = await cartPage.getTotalValue();

    console.log('Total before coupon: ' + totalBeforeCouponUsage);
    console.log('Total after coupon: ' + totalAfterCouponUsage);

    await expect(subTotalAfterCouponUsage === subTotalBeforeCouponUsage).toBeTruthy();
    await expect(totalAfterCouponUsage === totalBeforeCouponUsage * 0.85).toBeTruthy();

    await cartPage.clearCart();
  });
});
