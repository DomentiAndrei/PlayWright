import { test, expect } from '@playwright/test';
import { exectute } from '../Actions/mainStartSteps';
import { mainMenuPage } from '..//Pages/mainMenuPage';
import { picturesPage }  from '..//Pages/picturesPage';
import { editPictures }  from '../Pages/Pictures/editPictures';

test('Upload Edit and Delete Picture PNG format', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickPictures();

  const picturePage = new picturesPage(page);  
  await picturePage.clickUploadPicture();
  
  const fileInput = page.getByText('Upload pictures');
  await fileInput.setInputFiles('../Resources/twitter.png');
 
  await expect(picturePage.imageCheck).toBeVisible(); //assert check image uploaded 

    await picturePage.clickEditButton(); //edit name of the image 

    const editPicture = new editPictures(page);
    await editPicture.insertNameOfPicture('testUpdateName'); //insert new name of the image 
    await editPicture.clickUpdateButton();
    await expect(picturePage.newImageCheck).toBeVisible(); // check new name of the image
   
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('confirm')
        d.accept()
      });
    await picturePage.clickDeleteButton(); //click delete button

    await expect(picturePage.newImageCheck).toBeHidden;

});
test('Upload Edit and Delete Picture JPG format', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickPictures();

  const picturePage = new picturesPage(page);  
  await picturePage.clickUploadPicture();
  
  const fileInput = page.getByText('Upload pictures');
  await fileInput.setInputFiles('../Resources/format.jpg');
 
  await expect(picturePage.imageCheckJpg).toBeVisible(); //assert check image uploaded 

    await picturePage.clickEditButton(); //edit name of the image 

    const editPicture = new editPictures(page);
    await editPicture.insertNameOfPicture('testUpdateName'); //insert new name of the image 
    await editPicture.clickUpdateButton();
    await expect(picturePage.newImageCheck).toBeVisible(); // check new name of the image
   
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('confirm')
        d.accept()
      });
    await picturePage.clickDeleteButton(); //click delete button

     expect(picturePage.newImageCheck).toBeHidden;

});

test('Check warning message on Picture', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickPictures();

  const picturePage = new picturesPage(page);  
  await picturePage.clickUploadPicture();
  

  page.on('dialog', async dialog => {
       
    expect(dialog.message()).toContain('testVideo.mp4 is not a gif, jpeg, or png image file');
    await dialog.accept();
  });

  const fileInput = page.getByText('Upload pictures');
  await fileInput.setInputFiles('../Resources/testVideo.mp4');

});