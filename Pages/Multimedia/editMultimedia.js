exports.editMultimedia = class editMultimedia{ 

    constructor(page){
        this.page = page;
        this.editNameOfMultimedia = page.getByLabel('Title');
        this.saveButton = page.getByRole('button', { name: ' Save Video' });
        this.titleMedia = page.getByLabel('Title');
        this.descriptionMedia = page.getByLabel('Description');
        this.embedCode = page.getByPlaceholder('copy and paste the embed code');

    }
    
        async insertNameOfMultimedia( nameMultimedia){
            await this.editNameOfMultimedia.fill(nameMultimedia)
    }
    async clickSaveButton(){
        await this.saveButton.click();
    }

    async insertTitleMedia(mediaName){
        await this.titleMedia.fill(mediaName);
    }
    async insertDescription(description){
        await this.descriptionMedia.fill(description);
    }
    async insertEmbedCode(code){
        await this.embedCode.fill(code);
    }
    
    }