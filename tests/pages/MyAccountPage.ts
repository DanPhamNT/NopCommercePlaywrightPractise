import { Page } from '@playwright/test';

export class MyAccountPage {
  private myAccountLink = 'a.ico-account';
  private genderFemaleRadio = 'input#gender-female';
  private firstNameInput = 'input#FirstName';
  private lastNameInput = 'input#LastName';
  private companyInput = 'input#Company';
  private saveButton = 'button[name="save-info-button"]';
  private successMessage = 'div.bar-notification.success';

  constructor(private page: Page) {}

  async goto() {
    await this.page.click(this.myAccountLink);
  }

  async updateCustomerInfo(firstName: string, lastName: string, company: string) {
    await this.page.check(this.genderFemaleRadio);
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.companyInput, company);
    await this.page.click(this.saveButton);
  }

  async getSuccessMessageText() {
    return this.page.locator(this.successMessage).innerText();
  }
}
