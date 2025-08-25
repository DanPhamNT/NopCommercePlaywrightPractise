import { Page } from '@playwright/test';
const { baseUrl } = require('../data/global-data');

export class HomePage {
  private loginLink = 'a.ico-login';
  private myAccountLink = 'a.ico-account';
  private registerLink = 'a.ico-register';

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(baseUrl);
  }

  async clickLoginLink() {
    await this.page.click(this.loginLink);
  }

  async isMyAccountVisible() {
    return this.page.locator(this.myAccountLink).isVisible();
  }

  async clickRegisterLink() {
    await this.page.click(this.registerLink);
  }
}
