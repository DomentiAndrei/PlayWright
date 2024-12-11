exports.multimediaPage = class multimediaPage{ 

    constructor(page){
        this.page = page;
    
        this.addMultimedia =  page.getByText('Add multimedia');
        this.addMediaByLink = page.getByRole('link', { name: 'YouTube or Vimeo' });
        this.uploadMedia = page.getByRole('link', { name: 'Embedded Multimedia' });
        this.uploadPanorama = page.getByRole('link', { name: 'Panorama' });
        this.saveButton = page.getByRole('button', { name: ' Save Video' });
        this.editButton = page.locator('[data-tippy-content="Edit"]');
        this.nameMediaCheck = page.locator('text=testNameOfYoutubeVidioLink');
        this.deletePicture = page.locator('[data-tippy-content="Delete"]');
        this.namePanoramaCheck = page.locator('text=testPanoramaCheck');

        this.firstNameCheck = page.locator('text=firstNameCheck').first();
        this.editedNameCheck = page.locator('text=editedNameCheck');
        this.checkWarningMessage = page.locator('#toast-container');
        
    }
        async clickAddMultimedia(){
            await this.addMultimedia.click();
        }

        async clickYouTubeOrVimeo(){
            await this.addMediaByLink.click();
        }
        async clickUploadMedia(){
            await this.uploadMedia.click();
        }
        async clickUploadPanorama(){
            await this.uploadPanorama.click();
        }
        async clickEditButton(){
            await this.editButton.first().click();
        }
        async clickDeleteButton(){
            await this.deletePicture.first().click();
        }
        async clickSaveButton(){
            await this.saveButton.click();
        }
    
    
    
    } 