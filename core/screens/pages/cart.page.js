import { DefaultPage } from './default.page.js';
import { parseCurrency } from '../../../utils/currency-helper.js';

export class CartPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.removeButtons = page.locator('div#shopping-cart button.btn-danger');
    this.totalValues = page.locator('tfoot#checkout-total td.text-end:not(:has(strong))');
    this.expandCouponOptionsButton = page.locator('button[data-bs-target="#collapse-coupon"]');
    this.couponInput = page.locator('input#input-coupon');
    this.applyCouponButton = page.locator('form#form-coupon button');
    this.successCouponUsageAlert = page.locator('div#alert div.alert-success');
  }

  async clearCart() {
    const removeItemButtons = await this.removeButtons.all();
    for (const removeItemButton of removeItemButtons) {
      await removeItemButton.click();
    }
  }

  async getSubTotalValue() {
    const subTotalValueCell = await this.totalValues.first();
    return parseCurrency(await subTotalValueCell.textContent());
  }

  async getTotalValue() {
    const totalValueCell = await this.totalValues.last();
    return parseCurrency(await totalValueCell.textContent());
  }

  async expandCouponOptions() {
    await this.expandCouponOptionsButton.click();
  }

  async useCoupon(couponCode) {
    await this.couponInput.fill(couponCode);
    await this.applyCouponButton.click();
    await this.successCouponUsageAlert.waitFor({ state: 'attached' });
    await this.successCouponUsageAlert.waitFor({ state: 'detached' });
  }
}
