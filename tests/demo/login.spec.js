import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('test', async ({ page }) => {
    const Login = new LoginPage(page)

    await Login.gotoLoginpage()
    await Login.login('rajkumarv','Vasuvelu11!2','v.rajkumar@elsevier.com')


    // await page.goto('https://prefcentre-admin.marketing-uat.tio.systems/admin');
    // await page.getByPlaceholder('Username').click();
    // await page.getByPlaceholder('Username').fill('rajkumarv');
    // await page.getByPlaceholder('Username').press('Tab');
    // await page.getByPlaceholder('Password').fill('Vasuvelu11!2');
    // await page.getByPlaceholder('Password').press('Tab');
    // await page.getByPlaceholder('Client\'s e-mail address').fill('v.rajkumar@elsevier.com');
    // await page.getByLabel('Submit').click();
});