exports.mapPage = class mapPage{ 

    constructor(page){
        this.page = page;
    
        this.makeNewMap =  page.locator("//a[contains(text(),'Make a new map')]");
        this.workbench =  page.locator("//h5[text()='TestMapData']/ancestor::div[@class='map tile']//a[contains(text(), 'Workbench')]");
        this.properties =  page.locator("//h5[text()='TestMapData']/ancestor::div[@class='map tile']//a[contains(text(), 'Properties')]");
        this.delete =  page.locator("//h5[text()='TestMapData']/ancestor::div[@class='map tile']//a[contains(text(), 'Delete')]")
        this.checkNameOfMap = page.getByRole('heading', { name: 'TestMapData' }).first();
    }

    async clickmakeNewMap(){
        await this.makeNewMap.click({ force: true });
    }
    async clickWorkbench(){
        await this.workbench.first().click();
    }
    async clickProperties(){
        await this.properties.click();
    }
    async clickDelete(){
        await this.delete.first().click();
    }
}