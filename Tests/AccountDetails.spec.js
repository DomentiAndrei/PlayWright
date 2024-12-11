import { test, expect } from '@playwright/test';
import { userPage } from '../Pages/Account/userPage'; 
import { exectute } from '../Actions/mainStartSteps';
import { mainMenuPage }  from '..//Pages/mainMenuPage';

test('Check user Details', async({ page }) => {

    exectute(page);

    const mainMenu = new mainMenuPage(page);
    await mainMenu.clickAccount();
    
    const userpage = new userPage(page);
    await userpage.insertValues("Andrew", "Dom", "+373 68 466 000", " Decebal 123", "Chisinau", "MD", "2002");
    await mainMenu.clickAccount();
    await userpage.insertValues("UpdateAndrew", "UpdateDom", "112", "Update 123", "Updated", "UP", "2003");
    await mainMenu.clickAccount();

    await  expect(userpage.firstName).toBeVisible("UpdateAndrew");
    await expect(userpage.lastName).toBeVisible('UpdateDom');
    await expect(userpage.phone).toBeVisible("112");
    await expect(userpage.street).toBeVisible("Update 123");
    await expect(userpage.city).toBeVisible("Updated");
    await expect(userpage.state).toBeVisible("UP");
    await expect(userpage.zipCode).toBeVisible("2003");
    
    
    
});