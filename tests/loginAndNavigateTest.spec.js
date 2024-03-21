import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { NavigationPage } from '../pages/navigationPage';

test('Login and Navigate Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const navigationPage = new NavigationPage(page);

    // Navigate to the login page
    await loginPage.navigateToLoginPage('https://example.com/login');

    // Fill in the login form and submit
    await loginPage.login('your_username', 'your_password', 'your_email@example.com');

    // Get the generated token from the page
    const token = await loginPage.getTokenElementText();

    // Navigate to the next page using the generated token
    await navigationPage.navigateToNextPageWithToken(token);

    // Verify successful navigation to the next page
    await navigationPage.verifyNavigationToPage(`https://example.com/dashboard?token=${token}`);
});