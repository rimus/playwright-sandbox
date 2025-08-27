import { DefaultPage } from './default.page.js';
import { log } from '../../../utils/logger.js';

export class ProductPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.quantityInput = page.locator('input#input-quantity');
    this.addToCartButton = page.locator('button#button-cart');
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
  }
}
