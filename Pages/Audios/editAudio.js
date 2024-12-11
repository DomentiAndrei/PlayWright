exports.editAudio = class editAudio{ 

    constructor(page){
        this.page = page;
        this.editNameOfAudio = page.getByLabel('Title');
        this.updateButton = page.getByRole('button', { name: ' Update' });
    }
    
        async insertNameOfAudio( nameAudio){
            await this.editNameOfAudio.fill(nameAudio)
    }
    async clickUpdateButton(){
        await this.updateButton.click();
    }
    
    }