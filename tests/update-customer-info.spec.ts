
import { test } from './fixtures/test-fixture';
import { expect } from '@playwright/test';

import loginData from './data/login-data.json';
import updateCustomerInfo from './data/update-customer-info.json';


test('Update Customer Info: should update info and see success message', async ({ homePage, loginPage, myAccountPage }) => {
  const { email, password } = loginData[1];
  const { firstName, lastName, company, expectedUpdateSuccessMessage } = updateCustomerInfo[0];
  await homePage.goto();
  await homePage.clickLoginLink();
  await loginPage.login(email, password);
  await myAccountPage.goto();
  await myAccountPage.updateCustomerInfo(firstName, lastName, company);
  const message = await myAccountPage.getSuccessMessageText();
  expect(message).toContain(expectedUpdateSuccessMessage);
});
