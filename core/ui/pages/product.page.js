import { DefaultPage } from './default.page.js';

export class ProductPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.quantityInput = page.locator('input#input-quantity');
    this.addToCartButton = page.locator('button#button-cart');
  }

  async setQuantity(quantity) {
    await this.quantityInput.fill(String(quantity));
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
