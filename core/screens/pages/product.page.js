import { DefaultPage } from './default.page.js';
import { log } from '../../../utils/logger.js';

export class ProductPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.quantityInput = page.locator('input#input-quantity');
    this.addToCartButton = page.locator('button#button-cart');
    this.successCartUpdateAlert = page.locator('div#alert div.alert-success');
    log.debug('Product page initialized');
  }

  async setQuantity(quantity) {
    log.info(`Setting product quantity to ${quantity}`);
    log.debug(`Filling quantity ${quantity} to element ${this.quantityInput}`);
    await this.quantityInput.fill(String(quantity));
  }

  async addToCart() {
    log.info('Adding product to cart');
    log.debug(`Clicking element ${this.addToCartButton}`);
    await this.addToCartButton.click();
    log.debug('Waiting for success cart update alert attach');
    await this.successCartUpdateAlert.waitFor({ state: 'attached' });
    log.debug('Waiting for success cart update alert detach');
    await this.successCartUpdateAlert.waitFor({ state: 'detached' });
  }
}
