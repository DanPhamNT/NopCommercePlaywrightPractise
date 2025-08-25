import { Page } from '@playwright/test';
const { baseUrl } = require('../data/global-data');

export class RegisterPage {
    private registerLink = 'a.ico-register';
    private firstNameInput = 'input#FirstName';
    private lastNameInput = 'input#LastName';
    private emailInput = 'input#Email';
    private passwordInput = 'input#Password';
    private confirmPasswordInput = 'input#ConfirmPassword';
    private registerButton = 'button#register-button';
    private successMessage = 'div.result';

    constructor(private page: Page) { }



    async clickRegisterLink() {
        await this.page.click(this.registerLink);
    }

    async register(firstName: string, lastName: string, email: string, password: string) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.fill(this.confirmPasswordInput, password);
        await this.page.click(this.registerButton);
    }

    async isRegistrationSuccess() {
        return this.page.locator(this.successMessage).isVisible();
    }
}
