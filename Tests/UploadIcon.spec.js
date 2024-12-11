import { test, expect } from '@playwright/test';
import { iconsPage } from '../Pages/Icons/iconsPage';
import { editIcons } from '../Pages/Icons/editIcons';
import { exectute } from '../Actions/mainStartSteps';
import { mainMenuPage } from'..//Pages/mainMenuPage';


test('Upload Edit and Delete Icons', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickIcons();

  const iconPage = new iconsPage(page);  
  await iconPage.clickUploadIcons();
  
  const fileInput = page.getByText('Upload icons');
  await fileInput.setInputFiles('../Resources/pawTest.png');
 
  await expect(iconPage.iconCheck).toBeVisible(); //assert check icons uploaded 

    await iconPage.clickEditButton(); //edit name of the image 

    const editIcon = new editIcons(page);
    await editIcon.insertNameOfIcons('testUpdateName'); //insert new name of the icon 
    await editIcon.clickUpdateButton();
    await expect(iconPage.newIconCheck).toBeVisible(); // check new name of the icon
   
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('confirm')
        d.accept()
      });
    await iconPage.clickDeleteButton(); //click delete button
    expect(iconPage.newIconCheck).toBeHidden;
});
test('Check warning message on Icons', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickIcons();

  const iconPage = new iconsPage(page);  
  await iconPage.clickUploadIcons();

  page.on('dialog', async dialog => {
     
      expect(dialog.message()).toContain('testVideo.mp4 is not a gif, jpeg, or png image file');
      await dialog.accept();
    });

  const fileInput = page.getByText('Upload icons');
  await fileInput.setInputFiles('../Resources/testVideo.mp4');
  
});

