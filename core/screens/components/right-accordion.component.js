import { log } from '../../../utils/logger.js';

export class RightAccordion {
  constructor(page) {
    this.page = page;
    this.logoutLink = page.locator('aside a[href*="account/logout"]');
    log.debug('Right accordion component initialized');
  }
}
