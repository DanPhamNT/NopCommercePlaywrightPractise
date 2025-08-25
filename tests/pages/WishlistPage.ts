import { Page, Locator } from '@playwright/test';

export class WishlistPage {
  readonly page: Page;
  readonly wishlistTableRows: Locator;

  static wishlistTableRowsSelector = 'a.product-name';

  constructor(page: Page) {
    this.page = page;
    this.wishlistTableRows = page.locator(WishlistPage.wishlistTableRowsSelector);
  }

  static wishlistProductNameSelector = 'td.product a';

  async getWishlistProductNames(): Promise<string[]> {
    // Assumes product name is in the first cell of each row
    return await this.wishlistTableRows.locator(WishlistPage.wishlistProductNameSelector).allTextContents();
  }
}
