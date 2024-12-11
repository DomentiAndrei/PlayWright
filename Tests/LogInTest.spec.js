import { test, expect } from '@playwright/test';
import { homePage }  from '..//Pages/homePage';

test('Check wrong Password', async({ page }) => {
await page.goto('https://qa.maps.moderncampus.net/login')

const logInPage = new homePage(page);   
await expect(page).toHaveURL("https://qa.maps.moderncampus.net/login");
await logInPage.clickloginButton();

  logInPage.enterEmailAddress('bragandrei.92@gmail.com');

  await logInPage.clickContinueButton();

    logInPage.enterPassword('WrongPass!1');

  await logInPage.clickContinueButton();
  await expect(logInPage.checkMessage).toContainText('Wrong email or password');

});

