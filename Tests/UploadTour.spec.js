import { test, expect } from '@playwright/test';
import { exectute } from '../Actions/mainStartSteps';
import { multimediaPage } from '../Pages/Multimedia/multimediaPage';
import { editMultimedia } from '../Pages/Multimedia/editMultimedia';
import { mainMenuPage }  from'..//Pages/mainMenuPage';
import { toursPage }  from'..//Pages/Tours/toursPage';


test('Create new Tour', async({ page }) => {
  test.setTimeout(60000);
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

    await mainMenu.clickTours();

  const tourspage = new toursPage(page);  
   await tourspage.clickMakeNewTour();
    
   await tourspage.clickSelectPanorama();
   await tourspage.clickChoosePanormaFromList();
   await tourspage.clickSaveButton();
   await tourspage.insertTourTitle("testName");
   await tourspage.clickCreateTour();
   
 
   await expect(tourspage.newTourCheck).toBeVisible(); //assert check tour created 
   
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('Are you sure?')
        d.accept()
      });
    await tourspage.clickDeleteTours(); //click delete button

    await expect(tourspage.newTourCheck).toBeHidden;//assert check tour is not on page 

    await mainMenu.clickMultimedia();
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('confirm')
        d.accept()
      });
    await mediaPage.clickDeleteButton(); //click delete button

    expect(mediaPage.firstNameCheck).toBeHidden;//assert check panorama is not on page 

});
test('Check warning message on Tour', async({ page }) => {

  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickTours();

   const tourspage = new toursPage(page);  
   await tourspage.clickMakeNewTour();
   await tourspage.clickCreateTour();

   await expect(tourspage.checkWarningMessage).toContainText("can't be blank");
});

