import { Page } from '@playwright/test';

export class LoginPage {
  private emailInput = 'input#Email';
  private passwordInput = 'input#Password';
  private loginButton = 'button.login-button';

  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
