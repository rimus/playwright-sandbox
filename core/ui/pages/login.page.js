import { DefaultPage } from './default.page.js';

export class LoginPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('input#input-email');
    this.passwordInput = page.locator('input#input-password');
    this.loginButton = page.locator('button.btn-primary');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
