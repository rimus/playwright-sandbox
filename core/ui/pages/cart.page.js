import { DefaultPage } from './default.page.js';

export class CartPage extends DefaultPage {
  constructor(page) {
    super(page);
  }

  async clearCart() {
    const removeItemButtons = await this.page.locator('div#shopping-cart button.btn-danger').all();
    for (const removeItemButton of removeItemButtons) {
      await removeItemButton.click();
    }
  }
}