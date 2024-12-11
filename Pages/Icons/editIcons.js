exports.editIcons = class editIcons{ 

    constructor(page){
        this.page = page;
        this.editNameOfIcon = page.getByLabel('Title');
        this.updateButton = page.getByRole('button', { name: ' Update' });
    }
    
        async insertNameOfIcons( nameIcon){
            await this.editNameOfIcon.fill(nameIcon)
    }
    async clickUpdateButton(){
        await this.updateButton.first().click();
    }
    
    }