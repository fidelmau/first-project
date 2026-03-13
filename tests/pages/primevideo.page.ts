import { Page } from '@playwright/test';

export class PrimeVideoPage {
  readonly page: Page;
  readonly url = 'https://www.primevideo.com/-/es/collection/IncludedwithPrime';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async getMovieCards() {
    return await this.page.locator('[data-testid*="card"]').all();
  }

  async searchMovies(searchTerm: string) {
    const searchInput = this.page.locator('input[type="search"], input[placeholder*="search" i]');
    await searchInput.fill(searchTerm);
    await this.page.keyboard.press('Enter');
  }

  async clickFirstMovie() {
    const firstCard = this.page.locator('[data-testid*="card"]').first();
    await firstCard.click();
  }

  async checkMovieTitle() {
    return await this.page.locator('h1').first().textContent();
  }

  async getMovieCount() {
    const cards = await this.getMovieCards();
    return cards.length;
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async checkIfLoadingSpinnerPresent() {
    const spinner = this.page.locator('[data-testid*="spinner"], .loading, .loader');
    return await spinner.isVisible().catch(() => false);
  }

  async getHeaderText() {
    return await this.page.locator('header h1, .collection-title, [class*="title"]').first().textContent();
  }

  async clickFilter(filterName: string) {
    const filter = this.page.locator(`button:has-text("${filterName}"), [aria-label*="${filterName}"]`);
    await filter.click();
  }

  async getPrice(movieIndex: number = 0) {
    const priceElements = this.page.locator('[data-testid*="price"], .price, [class*="price"]');
    const prices = await priceElements.allTextContents();
    return prices[movieIndex] || null;
  }

  async checkPlayButton() {
    const playButton = this.page.locator('button[aria-label*="Play" i], [class*="play-button"]');
    return await playButton.isVisible();
  }

  async subscribeNow() {
    const subscribeButton = this.page.locator('button:has-text("Suscribirse"), button:has-text("Subscribe")');
    await subscribeButton.click();
  }
}
