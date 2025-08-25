import { test } from './fixtures/test-fixture';
import { expect } from '@playwright/test';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';


test('Register feature: should register a new user and see success message', async ({ homePage, registerPage }) => {
  await homePage.goto();
  await homePage.clickRegisterLink();

  // Generate a unique email for each run
  const randomNum = Math.floor(Math.random() * 100000);
  const email = `dan.pham${randomNum}@gmail.com`;

  await registerPage.register('Dan', 'Pham', email, 'Abc@123');
  await expect(await registerPage.isRegistrationSuccess()).toBeTruthy();
});
