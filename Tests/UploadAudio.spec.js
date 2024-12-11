import { test, expect } from '@playwright/test';
import { exectute } from '../Actions/mainStartSteps';
import { mainMenuPage }  from '..//Pages/mainMenuPage';
import { audioPage }  from '..//Pages/Audios/audioPage';
import { editAudio }  from '../Pages/Audios/editAudio';


test('Upload Edit and Delete Audio MP 3 format', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickAudios();

  const audiopage = new audioPage(page);  
  await audiopage.clickUploadAudio();
  
  const fileInput = page.getByText('Upload Sounds');
  await fileInput.setInputFiles('../Resources/happyBirthday.mp3');
 
  await expect(audiopage.soundCheckMP3).toBeVisible(); //assert check audio uploaded 

    await audiopage.clickEditButton(); //edit name of the audio 

    const editaudio = new editAudio(page);
    await editaudio.insertNameOfAudio('happyBirthdayTest.mp3'); //insert new name of the audio 
    await editaudio.clickUpdateButton();
    await expect(audiopage.newSoundCheckMP3).toBeVisible(); // check new name of the audio
   
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('confirm')
        d.accept()
      });
    await audiopage.clickDeleteButton(); //click delete button

    await expect(audiopage.newSoundCheckMP3).toBeHidden;

});

test('Upload Edit and Delete Audio WAV format', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickAudios();

  const audiopage = new audioPage(page);  
  await audiopage.clickUploadAudio();
  
  const fileInput = page.getByText('Upload Sounds');
  await fileInput.setInputFiles('../Resources/blip.wav');
 
  await expect(audiopage.soundCheckWAV).toBeVisible(); //assert check audio uploaded 

    await audiopage.clickEditButton(); //edit name of the audio 

    const editaudio = new editAudio(page);
    await editaudio.insertNameOfAudio('UpdateBlip.wav'); //insert new name of the audio 
    await editaudio.clickUpdateButton();
    await expect(audiopage.newSoundCheckWAV).toBeVisible(); // check new name of the audio
   
    page.once('dialog', async (d) => {        
        expect(d.message()).toEqual('confirm')
        d.accept()
      });
    await audiopage.clickDeleteButton(); //click delete button

    expect(audiopage.newSoundCheckWAV).toBeHidden;

});
test('Check warning message on Audio', async({ page }) => {
  exectute(page);

  const mainMenu = new mainMenuPage(page);
  await mainMenu.clickAudios();

  const audiopage = new audioPage(page);  
  await audiopage.clickUploadAudio();
   
  page.on('dialog', async dialog => {
       
    expect(dialog.message()).toContain('testVideo.mp4 is not a mp3, or wav image file');
    await dialog.accept();
  });

  const fileInput = page.getByText('Upload Sounds');
  await fileInput.setInputFiles('../Resources/testVideo.mp4');
});
