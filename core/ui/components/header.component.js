export class HeaderComponent {
  constructor(page) {
    this.page = page;
    // top
    this.myAccoutLink = page.locator('a:has(i.fa-user)');
    this.loginLink = page.locator('a[href*="account/login"]');
    this.shoppingCartLink = page.locator('div.nav a:has(i.fa-cart-shopping)');
    // main
    this.goHomeLink = page.locator('div#logo a');
  }

  async goToLogin() {
    await this.myAccoutLink.click();
    await this.loginLink.click();
    await this.page.waitForURL(/account\/login/);
  }

  async goToCart() {
    await this.shoppingCartLink.click();
    await this.page.waitForURL(/checkout\/cart/);
  }

  async goHome() {
    await this.goHomeLink.click();
    await this.page.waitForURL(/common\/home/);
  }
}
