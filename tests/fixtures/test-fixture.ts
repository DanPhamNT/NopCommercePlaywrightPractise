import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { SearchPage } from '../pages/SearchPage';
import { WishlistPage } from '../pages/WishlistPage';

export const test = base.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
  registerPage: RegisterPage;
  myAccountPage: MyAccountPage;
  searchPage: SearchPage;
  wishlistPage: WishlistPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  myAccountPage: async ({ page }, use) => {
    await use(new MyAccountPage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  wishlistPage: async ({ page }, use) => {
    await use(new WishlistPage(page));
  },
});
