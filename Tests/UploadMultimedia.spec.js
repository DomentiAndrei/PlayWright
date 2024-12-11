import { test, expect } from '@playwright/test';
import { multimediaPage } from '../Pages/Multimedia/multimediaPage';
import { editMultimedia } from '../Pages/Multimedia/editMultimedia';
import { exectute } from '../Actions/mainStartSteps';
import { EmbedCode } from '../Resources/EmbedCode';
import { mainMenuPage } from '..//Pages/mainMenuPage';


test('Add, Edit and Delete Multimedia By YouTube Link', async({ page }) => {

    exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickMultimedia();

  const mediaPage = new multimediaPage(page);  
  await mediaPage.clickAddMultimedia();
  await mediaPage.clickYouTubeOrVimeo();
  
  await page.getByPlaceholder('enter link to video').fill('https://youtu.be/OMqMFU5ylZs');
  await mediaPage.clickSaveButton();
  

    await mediaPage.clickEditButton(); //edit name of the added link from youtube 
    const editMedia = new editMultimedia(page);
    await editMedia.insertNameOfMultimedia('firstNameCheck'); //insert new name of the media 
    await editMedia.clickSaveButton();
    await expect(mediaPage.firstNameCheck).toBeVisible(); //assert check media uploaded 
   
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('confirm')
        d.accept()
      });
    await mediaPage.clickDeleteButton(); //click delete button

    expect(mediaPage.firstNameCheck).toBeHidden; //assert check media is not on page  
});

test('Upload, Edit and Delete Video', async({ page }) => {
        
      exectute(page);
    
      const mainMenu = new mainMenuPage(page);
      await mainMenu.clickMultimedia();
    
      const mediaPage = new multimediaPage(page);  
      await mediaPage.clickAddMultimedia();
      await mediaPage.clickUploadMedia(); // New Embedded Multimedia
      const editMedia = new editMultimedia(page);
      await editMedia.insertTitleMedia("firstNameCheck");
      await editMedia.insertDescription("Description");

      const embedCod = new EmbedCode();
      await editMedia.insertEmbedCode(embedCod.embedcode);
  
      await mediaPage.clickSaveButton();
    
      await mediaPage.clickEditButton(); //edit name of the embedded link from youtube 
    
      await editMedia.insertNameOfMultimedia('editedNameCheck'); //insert new name of the embedded 
      await editMedia.insertDescription('testDescEmbeddedScenario'); //insert new name of the embedded 
      await editMedia.clickSaveButton();
      await expect(mediaPage.editedNameCheck).toBeVisible(); //assert check media uploaded 
       
        page.once('dialog', async (d) => {        
            expect(d.message()).toEqual('confirm')
            d.accept()
          });
        await mediaPage.clickDeleteButton(); //click delete button
    
        expect(mediaPage.editedNameCheck).toBeHidden; //assert check media is not on page  
    });

    test('Upload, Edit and Delete Panorama', async({ page }) => {
        
      exectute(page);
  
    const mainMenu = new mainMenuPage(page);
    await mainMenu.clickMultimedia();
  
    const mediaPage = new multimediaPage(page);  
    await mediaPage.clickAddMultimedia();
    await mediaPage.clickUploadPanorama(); // upload Panorama
    const editMedia = new editMultimedia(page);
    await editMedia.insertTitleMedia("firstNameCheck");
    await editMedia.insertDescription("Description");

    
    const fileInput = page.getByText('Upload 360 Panorama Image');
    await fileInput.setInputFiles('../Resources/panorama.jpg');
    await mediaPage.clickSaveButton();
    
  
      await mediaPage.clickEditButton(); //edit name of the embedded link from youtube 
  
      await editMedia.insertNameOfMultimedia('editedNameCheck'); //insert new name of the panorama 
      await editMedia.insertDescription('testDescEmbeddedScenario'); //insert new name of the panorama 
      await editMedia.clickSaveButton();
      await expect(mediaPage.editedNameCheck).toBeVisible(); //assert check panorama uploaded 
     
      page.once('dialog', async (d) => {        
          expect(d.message()).toEqual('confirm')
          d.accept()
        });
      await mediaPage.clickDeleteButton(); //click delete button
  
      expect(mediaPage.editedNameCheck).toBeHidden; //assert check panorama is not on page  
  });
  test('Check warning message on Multimedia', async({ page }) => {
    exectute(page);
  
    const mainMenu = new mainMenuPage(page);
    await mainMenu.clickMultimedia();
  
    const mediaPage = new multimediaPage(page);  
    await mediaPage.clickAddMultimedia();
    await mediaPage.clickUploadPanorama(); // upload Panorama
    const editMedia = new editMultimedia(page);
    await editMedia.insertTitleMedia("firstNameCheck");
    await editMedia.insertDescription("Description");

    const fileInput = page.getByText('Upload 360 Panorama Image');
    await fileInput.setInputFiles('../Resources/testVideo.mp4');
    await mediaPage.clickSaveButton();

    await expect(mediaPage.checkWarningMessage).toContainText('Your Youtube or Vimeo URL is not valid. Please check and try again');

  });
