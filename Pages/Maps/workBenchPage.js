exports.workBenchPage = class workBenchPage{ 

    constructor(page){
        this.page = page;
        // stop page elemets 
        this.spots = page.locator('[data-tippy-content="Stops"]');
        this.publish = page.getByRole('link', { name: ' Publish' })
        this.newStop = page.locator("//a[@id='addMarker' and contains(text(), 'New Stop')]");
        this.title = page.locator("[id='marker_title']");
        this.description = page.locator("[class='note-editable']");
        this.saveStopButton = page.locator('[class="btn btn btn-success"]')
        this.setPointOnMap = page.locator('#nucloudMap canvas');
        this.checkName = page.getByText('TestMapData').nth(1);
        this.checkNameOfCreatedStop = page.getByText('TestNewTitle', { exact: true }).first();
        this.deleteButton = page.locator('[data-method="delete"]');
        this.checkMessage = page.locator('#toast-container');
        // category page elemets 
        this.category = page.locator('[data-tippy-content="Categories"]'); //category webElement
        this.newStopCategoryButton = page.locator("[id='addCategory']");
        this.categoryName = page.locator("[id='layer_name']");
        this.markers = page.getByRole('combobox').getByRole('textbox');
        this.selectStop =  page.getByRole('option', { name: 'TestNewTitle Press to select' });
        //publish map page elements
        this.publisComment = page.locator("[id='publish_comment']");
        this.publishButton = page.locator("[value='Publish']");
        this.checkSSuccessfullyMessage = page.locator("//div[contains(text(),'Publish was successfully created.')]");

    }
    
    async clickStops(){
        await this.spots.click();
    }
    async clickPublishOption(){
        await this.publish.click();
    }
    async clickNewStop(){
        await this.newStop.click({ force: true });
    }
    async insertStopTitle(nameOfStop){
        await this.title.fill(nameOfStop);
    }
    async insertDescription(descript){
        await this.description.fill(descript);
    }
    async clickSetPointOnMap(){
        await this.setPointOnMap.click({
            position: {
                x: 540,
                y: 428
              }
          });
    }
    async clickSaveButtonp(){
        await this.saveStopButton.click();
    }
    async clickDeleteButton(){
        await this.deleteButton.click();
    }
    async clickCategory(){
        await this.category.click({ force: true });
    }
    async clickNewStopCategoryButton(){
        await this.newStopCategoryButton.click({ force: true });
    }
    async clickMarkers(){
        await this.markers.click();
    }
    async selectStopFromList(){
        await this.selectStop.click();
    }
    async insertPublishComment(comment){
        await this.publisComment.fill(comment);
    }
    async clickPublishButton(){
        await this.publishButton.click();
    }  
    async insertCategoryTitle(title){
        await this.categoryName.fill(title);
    }  

}        