import { test } from './fixtures/test-fixture';
import { expect } from '@playwright/test';
const globalData = require('./data/global-data');


// Data for the search test
const searchProductData = require('./data/search-product-data.json');
const { searchKeyword, expectedProducts } = searchProductData[0];

test('Search for Lenovo and verify products', async ({ page, searchPage }) => {
  await page.goto(globalData.baseUrl);
  await searchPage.searchFor(searchKeyword);
  const productTitles = await searchPage.getProductTitles();

  // Check that both expected products are present
  for (const expected of expectedProducts) {
    expect(productTitles.some(title => title.includes(expected))).toBeTruthy();
  }

  // Optionally, check that there are exactly 2 Lenovo products
  const lenovoProducts = productTitles.filter(title => title.includes('Lenovo'));
  expect(lenovoProducts.length).toBe(2);
});
