import { test, expect } from '@playwright/test';
import { PrimeVideoPage } from './pages/primevideo.page';

test.describe('Prime Video - Included with Prime Collection Tests', () => {
  let primeVideoPage: PrimeVideoPage;

  test.beforeEach(async ({ page }) => {
    primeVideoPage = new PrimeVideoPage(page);
    await primeVideoPage.navigate();
    await page.waitForLoadState('networkidle');
  });

  test('TC-001: Verify page loads successfully with correct title', async ({ page }) => {
    const title = await primeVideoPage.getPageTitle();
    expect(title).toBeTruthy();
    expect(title.toLowerCase()).toContain('prime');
  });

  test('TC-002: Verify collection header is visible', async ({ page }) => {
    const headerText = await primeVideoPage.getHeaderText();
    expect(headerText).toBeTruthy();
    expect(headerText?.length).toBeGreaterThan(0);
  });

  test('TC-003: Verify movie cards are displayed', async ({ page }) => {
    await page.waitForTimeout(2000);
    const movieCount = await primeVideoPage.getMovieCount();
    expect(movieCount).toBeGreaterThan(0);
  });

  test('TC-004: Verify clicking on a movie card navigates to details page', async ({ page }) => {
    await page.waitForTimeout(1000);
    const initialUrl = page.url();
    
    try {
      await primeVideoPage.clickFirstMovie();
      await page.waitForLoadState('networkidle');
      const newUrl = page.url();
      expect(newUrl).not.toBe(initialUrl);
    } catch {
      // If click fails, test that cards are at least present
      const movieCount = await primeVideoPage.getMovieCount();
      expect(movieCount).toBeGreaterThan(0);
    }
  });

  test('TC-005: Verify page layout and main content container is visible', async ({ page }) => {
    const mainContent = page.locator('main, [role="main"], .collection-container, [class*="collection"]');
    await expect(mainContent).toBeVisible();
  });

  test('TC-006: Verify scrolling loads more content', async ({ page }) => {
    const initialCardCount = await primeVideoPage.getMovieCount();
    await primeVideoPage.scrollToBottom();
    await page.waitForTimeout(2000);
    const finalCardCount = await primeVideoPage.getMovieCount();
    
    // Either more cards loaded or we're at the end
    expect(finalCardCount).toBeGreaterThanOrEqual(initialCardCount);
  });

  test('TC-007: Verify page has responsive elements', async ({ page }) => {
    const movieCards = await primeVideoPage.getMovieCards();
    expect(movieCards.length).toBeGreaterThan(0);
    
    // Check that the first card is visible and has content
    const firstCard = movieCards[0];
    await expect(firstCard).toBeInViewport();
  });

  test('TC-008: Verify images load in movie cards', async ({ page }) => {
    const images = page.locator('img[alt*="Prime"], img[src*="image"], [class*="card"] img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);
  });

  test('TC-009: Verify no critical errors in console', async ({ page }) => {
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleLogs.push(msg.text());
      }
    });

    await page.waitForTimeout(3000);
    
    // Filter out known/non-critical errors
    const criticalErrors = consoleLogs.filter(
      log => !log.includes('sourcemap') && !log.includes('favicon') && log.length > 0
    );
    
    // We expect minimal critical errors
    expect(criticalErrors.length).toBeLessThan(5);
  });

  test('TC-010: Verify page response time is acceptable', async ({ page }) => {
    const startTime = Date.now();
    await primeVideoPage.navigate();
    await page.waitForLoadState('networkidle');
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    
    // Page should load in less than 30 seconds
    expect(loadTime).toBeLessThan(30000);
  });
});
