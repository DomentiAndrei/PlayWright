exports.picturesPage = class picturesPage{ 

constructor(page){
    this.page = page;

    this.uploadPicture =  page.getByText('Upload pictures');
    this.editButton = page.locator('[data-tippy-content="Edit"]');

    this.imageCheck = page.locator('text=twitter.png');
    this.imageCheckJpg = page.locator('text=format.jpg');
  

    this.newImageCheck = page.locator('text=testUpdateName').first();
    this.deletePicture = page.locator('[data-tippy-content="Delete"]');
    
}
    async clickUploadPicture(){
        await this.uploadPicture;
    }
    async clickEditButton(){
        await this.editButton.first().click();
    }
    async clickDeleteButton(){
        await this.deletePicture.first().click();
    }



} 