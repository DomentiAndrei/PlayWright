exports.audioPage = class audioPage{ 

    constructor(page){
        this.page = page;
    
        this.uploadAudio =  page.getByText('Upload audio');
        this.editButton = page.locator('[data-tippy-content="Edit"]');
        this.soundCheckMP3 = page.locator('text=happyBirthday.mp3');
        this.newSoundCheckMP3 = page.locator('text=happyBirthdayTest.mp3');
        this.soundCheckWAV = page.locator('text=blip.wav');
        this.newSoundCheckWAV = page.locator('text=UpdateBlip.wav');
        this.deleteSound = page.locator('[data-tippy-content="Delete"]');
        
    }
        async clickUploadAudio(){
            await this.uploadAudio;
        }
        async clickEditButton(){
            await this.editButton.first().click();
        }
        async clickDeleteButton(){
            await this.deleteSound.first().click();
        }

        
    
    
    
    } 