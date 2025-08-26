import { DefaultPage } from './default.page.js';

export class LoginPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('input#input-email');
    this.passwordInput = page.locator('input#input-password');
    this.loginButton = page.locator('button.btn-primary');
  }

  async login(user) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
    await this.page.waitForURL(/customer_token/);
  }
}
