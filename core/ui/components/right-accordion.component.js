export class RightAccordion {
  constructor(page) {
    this.page = page;
    this.logoutLink = page.locator('aside a[href*="account/logout"]');
  }
}
