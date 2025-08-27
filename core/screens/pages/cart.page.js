import { DefaultPage } from './default.page.js';
import { parseCurrency } from '../../../utils/currency-helper.js';
import { log } from '../../../utils/logger.js';

export class CartPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.removeButtons = page.locator('div#shopping-cart button.btn-danger');
    this.totalValues = page.locator('tfoot#checkout-total td.text-end:not(:has(strong))');
    this.expandCouponOptionsButton = page.locator('button[data-bs-target="#collapse-coupon"]');
    this.couponInput = page.locator('input#input-coupon');
    this.applyCouponButton = page.locator('form#form-coupon button');
    this.successCouponUsageAlert = page.locator('div#alert div.alert-success');
    log.debug('Cart page initialized');
  }

  async clearCart() {
    log.info('Clearing cart');
    const removeItemButtons = await this.removeButtons.all();
    log.debug(`Found ${removeItemButtons.length} item(s) in cart to remove`);
    for (const [i, removeItemButton] of removeItemButtons.entries()) {
      log.debug(`Clicking element ${removeItemButton} [${i + 1}]`);
      await removeItemButton.click();
    }
  }

  async getSubTotalValue() {
    log.info('Getting sub-total value');
    const subTotalValueCell = await this.totalValues.first();
    const text = await subTotalValueCell.textContent();
    log.debug(`SubTotal value: ${text}`);
    return parseCurrency(text);
  }

  async getTotalValue() {
    log.info('Getting total value');
    const totalValueCell = await this.totalValues.last();
    const text = await totalValueCell.textContent();
    log.debug(`Total value: ${text}`);
    return parseCurrency(text);
  }

  async expandCouponOptions() {
    log.info('Expanding coupon options');
    log.debug(`Clicking element ${this.expandCouponOptionsButton}`);
    await this.expandCouponOptionsButton.click();
  }

  async useCoupon(coupon) {
    log.info('Applying coupon');
    log.debug(`Filling coupon code ${coupon.code} to element ${this.couponInput}`);
    await this.couponInput.fill(coupon.code);
    log.debug(`Clicking element ${this.applyCouponButton}`);
    await this.applyCouponButton.click();
    log.debug('Waiting for success coupon alert attach');
    await this.successCouponUsageAlert.waitFor({ state: 'attached' });
    log.debug('Waiting for success coupon alert detach');
    await this.successCouponUsageAlert.waitFor({ state: 'detached' });
  }
}
