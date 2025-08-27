import { log } from '../../../utils/logger.js';

export class HeaderComponent {
  constructor(page) {
    this.page = page;
    // top
    this.myAccoutLink = page.locator('a:has(i.fa-user)');
    this.loginLink = page.locator('a[href*="account/login"]');
    this.shoppingCartLink = page.locator('div.nav a:has(i.fa-cart-shopping)');
    // main
    this.goHomeLink = page.locator('div#logo a');
    log.debug('Header component initialized');
  }

  async goToLogin() {
    log.info('Opening login menu');
    log.debug(`Clicking element ${this.myAccoutLink}`);
    await this.myAccoutLink.click();
    log.debug(`Clicking element ${this.loginLink}`);
    await this.loginLink.click();
    log.debug('Waiting for /account/login/ in current URL');
    await this.page.waitForURL(/account\/login/);
  }

  async goToCart() {
    log.info('Navigating to cart page');
    log.debug(`Clicking element ${this.shoppingCartLink}`);
    await this.shoppingCartLink.click();
    log.debug('Waiting for /checkout/cart/ in current URL');
    await this.page.waitForURL(/checkout\/cart/);
  }

  async goHome() {
    log.info('Navigating to home page');
    log.debug(`Clicking element ${this.goHomeLink}`);
    await this.goHomeLink.click();
    log.debug('Waiting for /common/home/ in current URL');
    await this.page.waitForURL(/common\/home/);
  }
}
