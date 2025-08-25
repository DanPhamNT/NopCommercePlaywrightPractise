import { test } from './fixtures/test-fixture';
import { expect } from '@playwright/test';
const globalData = require('./data/global-data');
const loginData = require('./data/login-data.json');
const wishlistData = require('./data/add-to-wishlist-data.json');

const { email, password } = loginData[0];
const { searchKeyword, expectedProduct, wishlistSuccessMessage } = wishlistData[0];

test('Add to Wishlist feature', async ({ page, homePage, loginPage, searchPage, wishlistPage }) => {
  // 1. Go to site and login
  await page.goto(globalData.baseUrl);
  await homePage.clickLoginLink();
  await loginPage.login(email, password);
  await expect(await homePage.isMyAccountVisible()).toBeTruthy();

  // 2. Search for the product
  await searchPage.searchFor(searchKeyword);
  const productTitles = await searchPage.getProductTitles();
  expect(productTitles.some(title => title.includes(expectedProduct))).toBeTruthy();

  // 3. Open product details
  await page.click(`a:has-text(\"${expectedProduct}\")`);

  // 4. Add to Wishlist
  await page.click('button#add-to-wishlist-button-3');

  // 5. Verify success message
  const message = await page.locator('p.content').innerText();
  expect(message).toContain(wishlistSuccessMessage);

  // 6. Click wishlist link in message
  await page.locator('.bar-notification.success a').click();

  // 7. Verify product in wishlist table
  const wishlistProducts = await wishlistPage.getWishlistProductNames();
  expect(wishlistProducts[wishlistProducts.length - 1]).toContain(expectedProduct);
});
