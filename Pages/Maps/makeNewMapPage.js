exports.makeNewMapPage = class makeNewMapPage{ 

    constructor(page){
        this.page = page;
    
        this.titleofNewMap =  page.locator('[id="map_title"]');
        this.uploadButton = page.locator('[class="btn btn-success"]');
        this.checkWarningMessage = page.locator('#new_map');

    }
    async insertTitleMap(titleMap){
        await this.titleofNewMap.fill(titleMap);
    }
    async clickUploadButton(){
        await this.uploadButton.click();
    }





}