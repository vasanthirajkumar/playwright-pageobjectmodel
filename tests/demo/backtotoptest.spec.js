import { test, expect } from '@playwright/test';
import { BackToTopPage } from '../pages/backtotop';

test('Verify Back to Top Button Functionality', async ({ page }) => {
    const backToTopPage = new BackToTopPage(page);

    // Scroll down to a certain position on the page
    await page.evaluate(() => window.scrollTo(0, 1000));

    // Click on the Back to Top button
    await backToTopPage.clickBackToTopButton();

    // Wait for the page to scroll back to the top
    await page.waitForTimeout(2000); // Adjust the timeout as needed

    // Verify that the page is scrolled back to the top
    const scrollTop = await page.evaluate(() => document.documentElement.scrollTop);
    expect(scrollTop).toBe(0);
});