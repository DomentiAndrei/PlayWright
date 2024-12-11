exports.editPictures = class editPictures{ 

constructor(page){
    this.page = page;
    this.editNameOfPicture = page.getByLabel('Title');
    this.updateButton = page.getByRole('button', { name: ' Update' });
}

    async insertNameOfPicture( namePicture){
        await this.editNameOfPicture.fill(namePicture)
}
async clickUpdateButton(){
    await this.updateButton.click();
}

}