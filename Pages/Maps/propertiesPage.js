 
exports.propertiesPage = class propertiesPage{ 

    constructor(page){
        this.page = page;
        // stop page elemets 
        this.checkOpenedPage = page.getByRole('heading', { name: 'Map Properties' }).first();
        this.cancelButton = page.getByRole('link', { name: ' Cancel' });
    }
    async clickCancelButton(){
        await this.cancelButton.click();
    }

}