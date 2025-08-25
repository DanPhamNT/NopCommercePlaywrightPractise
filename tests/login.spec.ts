import { test } from './fixtures/test-fixture';
import { expect } from '@playwright/test';
import loginData from './data/login-data.json';

test.describe('Login feature', () => {

    test(`should login and see My account link `, async ({ homePage, loginPage, page }) => {
      const { email, password } = loginData[0];
        await homePage.goto();
      await homePage.clickLoginLink();
      await loginPage.login(email, password);
  await expect(await homePage.isMyAccountVisible()).toBeTruthy();
    });
  
});
