import { test, expect } from '@playwright/test';

const { homePage } = require('../Pages/homePage');



export const exectute = async(page) => {
    
         page.goto('https://qa.maps.moderncampus.net/login');
        
        const logInPage = new homePage(page);   
        await expect(page).toHaveURL("https://qa.maps.moderncampus.net/login");
        await logInPage.clickloginButton();
        
          logInPage.enterEmailAddress('bragandrei.92@gmail.com');
        
          await logInPage.clickContinueButton();
        
            logInPage.enterPassword('Armagidon8!');
        
          await logInPage.clickContinueButton();

}

