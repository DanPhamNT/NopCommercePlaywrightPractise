import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productTitles: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input#small-searchterms');
    this.searchButton = page.locator('button[type="submit"][class*="search-box-button"]');
    this.productTitles = page.locator('.product-title a');
  }

  async searchFor(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async getProductTitles(): Promise<string[]> {
    return await this.productTitles.allTextContents();
  }
}
