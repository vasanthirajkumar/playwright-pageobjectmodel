import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { getByPlaceholder } from '@playwright/test';


test('test', async ({ page }) => {
    const Login = new LoginPage(page)

    await Login.gotoLoginpage()
    await Login.login('rajkumarv','Vasuvelu11!2','v.rajkumar@elsevier.com')

});

test('Negative login test', async ({ page }) => {
    const Login = new LoginPage(page)

    await Login.gotoLoginpage()
    
    // Print the current URL before attempting login
    console.log('Current URL before login:', page.url())

    // Attempt login with incorrect password
    await Login.login('rajkumarv', 'wrongpassword', 'v.rajkumar@elsevier.com')

    // Verify that the login failed
    await expect(page).toHaveURL('https://prefcentre-admin.marketing-uat.tio.systems/admin') // URL should remain the same after failed login
    //await expect(page).not.toHaveText('Welcome') // Check that 'Welcome' text is not present after failed login
    // Add more assertions as needed to ensure the login failure is properly detected

    // Print the current URL after attempting login
    console.log('Current URL after login attempt:', page.url())

});

test('Verify elements on the logged-in page', async ({ page }) => {
    const Login = new LoginPage(page)

    await Login.gotoLoginpage()
    await Login.login('rajkumarv','Vasuvelu11!2','v.rajkumar@elsevier.com')

    // Assert the presence of a logout button
    await expect(page).toHaveSelector('button[name="logout"]')

});


    // await page.goto('https://prefcentre-admin.marketing-uat.tio.systems/admin');
    // await page.getByPlaceholder('Username').click();
    // await page.getByPlaceholder('Username').fill('rajkumarv');
    // await page.getByPlaceholder('Username').press('Tab');
    // await page.getByPlaceholder('Password').fill('Password11');
    // await page.getByPlaceholder('Password').press('Tab');
    // await page.getByPlaceholder('Client\'s e-mail address').fill('v.rajkumar@elsevier.com');
    // await page.getByLabel('Submit').click();
//});