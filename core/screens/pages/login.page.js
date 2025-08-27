import { DefaultPage } from './default.page.js';
import { log } from '../../../utils/logger.js';

export class LoginPage extends DefaultPage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('input#input-email');
    this.passwordInput = page.locator('input#input-password');
    this.loginButton = page.locator('button.btn-primary');
    log.debug('Login page initialized');
  }

  async login(user) {
    log.info(`Logging in user ${user.email}`);
    log.debug(`Filling email ${user.email} to element ${this.emailInput}`);
    await this.emailInput.fill(user.email);
    log.debug(`Filling password ******** to element ${this.passwordInput}`);
    await this.passwordInput.fill(user.password);
    log.debug('Clicking login button');
    await this.loginButton.click();
    log.debug('Waiting for /customer_token/ in current URL');
    await this.page.waitForURL(/customer_token/);
  }
}
