import { test, expect } from '@playwright/test';
import { exectute } from '../Actions/mainStartSteps';
import { mapPage } from '../Pages/Maps/mapPage';
import { workBenchPage } from '../Pages/Maps/workBenchPage';
import { makeNewMapPage } from '../Pages/Maps/makeNewMapPage';
import { propertiesPage } from '../Pages/Maps/propertiesPage';
import { mainMenuPage }  from '../Pages/mainMenuPage';

test('Add new map, validate and delete it', async({ page }) => {

  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickAllMaps();

  const mappage = new mapPage(page);
  await mappage.clickmakeNewMap();

  const makeNewMap = new makeNewMapPage(page);
  await makeNewMap.insertTitleMap("TestMapData");

  const fileInput = page.locator('[id="map_image"]');
  await fileInput.setInputFiles('../Resources/testMap.png');

  await makeNewMap.clickUploadButton();

  await expect(mappage.checkNameOfMap).toBeVisible();

  await mappage.clickProperties();

  const propertiespage = new propertiesPage(page);
  await expect(propertiespage.checkOpenedPage).toBeVisible();

  await page.goBack();

  page.once('dialog', async (d) => {        
      expect(d.message()).toEqual('Are you sure?');
      d.accept()
    });
  await mappage.clickDelete();
  await expect(mappage.checkNameOfMap).toBeHidden();

}); 

test('Publish New Map', async({ page }) => {
  test.setTimeout(60000);
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickAllMaps();

  const mappage = new mapPage(page);
  await mappage.clickmakeNewMap();

  const makeNewMap = new makeNewMapPage(page);
  await makeNewMap.insertTitleMap("TestMapData");

  const fileInput = page.locator('[id="map_image"]');
  await fileInput.setInputFiles('../Resources/testMap.png');

  await makeNewMap.clickUploadButton();

  await expect(mappage.checkNameOfMap).toBeVisible();

  await mappage.clickWorkbench();

  const currentUrl = page.url();
  const match = currentUrl.match(/maps\/(\d+)\/markers/);
  const dynamicId = match[1];
  
  await page.getByRole('link', { name: ' Publish' }).click();
 
  await page.goto(`https://qa.maps.moderncampus.net/maps/${dynamicId}/publishes`)

  const workbenchPage = new workBenchPage(page);
    
  await workbenchPage.insertPublishComment("Publish new Map now");
  await workbenchPage.clickPublishButton();

  await expect(page.locator('body')).toContainText('Publish Map');
  await expect(workbenchPage.checkSSuccessfullyMessage).toContainText('Publish was successfully created.');
 
  await mainMenu.clickAllMaps();

  page.once('dialog', async (d) => {        
    expect(d.message()).toEqual('Are you sure?');
    d.accept()
  });
await mappage.clickDelete();

await expect(mappage.checkNameOfMap).toBeHidden();
});

test('Create new Stop, validate error message ', async({ page }) => {
  test.setTimeout(60000);
    exectute(page);

    const mainMenu = new mainMenuPage(page);
    await mainMenu.clickAllMaps();
    
    const mappage = new mapPage(page);
    await mappage.clickmakeNewMap();

    const makeNewMap = new makeNewMapPage(page);
    await makeNewMap.insertTitleMap("TestMapData");

    const fileInput = page.locator('[id="map_image"]');
    await fileInput.setInputFiles('../Resources/testMap.png');

    await makeNewMap.clickUploadButton();

    await expect(mappage.checkNameOfMap).toBeVisible();
    
    await mainMenu.clickAllMaps();
    await mappage.clickWorkbench();

    const workbenchPage = new workBenchPage(page);
    await workbenchPage.clickNewStop();
   
    await expect(workbenchPage.checkName).toBeVisible("TestMapData");

    await workbenchPage.insertStopTitle("TestNewTitle");
    await workbenchPage.insertDescription("TestDesc");
    
    await workbenchPage.clickSaveButtonp();

    await expect(workbenchPage.checkMessage).toContainText('Lon can\'t be blank');
    await mainMenu.clickAllMaps();

    page.once('dialog', async (d) => {        
    expect(d.message()).toEqual('Are you sure?');
    d.accept()
    });
    await mappage.clickDelete();
    await expect(mappage.checkNameOfMap).toBeHidden();
    
});

test('Create new Category with just created stop and delete category', async({ page }) => {
  test.setTimeout(60000);
  exectute(page);
  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickAllMaps();

  const mappage = new mapPage(page);
  await mappage.clickmakeNewMap();

  const makeNewMap = new makeNewMapPage(page);
  await makeNewMap.insertTitleMap("TestMapData");

  const fileInput = page.locator('[id="map_image"]');
  await fileInput.setInputFiles('../Resources/testMap.png');

  await makeNewMap.clickUploadButton();

  await expect(mappage.checkNameOfMap).toBeVisible();

  await mainMenu.clickAllMaps();

  await mappage.clickWorkbench();

  const workbenchPage = new workBenchPage(page);

  await workbenchPage.clickCategory();
  await workbenchPage.clickNewStopCategoryButton();
  await workbenchPage.insertCategoryTitle("TestNewTitle");

  const fileInputCategory = page.getByText('Edit');
  await fileInputCategory.setInputFiles('../Resources/categoryIcon.png');

  await workbenchPage.clickSaveButtonp();
 
  await expect(workbenchPage.checkNameOfCreatedStop).toBeVisible();

  await mainMenu.clickAllMaps();
  await mappage.clickWorkbench();
  
  await workbenchPage.clickCategory();

  page.once('dialog', async (d) => {        
    expect(d.message()).toEqual('confirm')
    d.accept()
  });
await workbenchPage.clickDeleteButton(); 

expect(workbenchPage.checkNameOfCreatedStop).toBeHidden; 

await mainMenu.clickAllMaps();


page.once('dialog', async (d) => {        
    expect(d.message()).toEqual('Are you sure?');
    d.accept()
  });
await mappage.clickDelete();

await expect(mappage.checkNameOfMap).toBeHidden();
});



