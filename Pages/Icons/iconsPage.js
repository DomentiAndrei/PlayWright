exports.iconsPage = class iconsPage{ 

    constructor(page){
        this.page = page;
    
        this.uploadIcons =  page.getByText('Upload icons');
        this.editButton = page.locator('//body//div[1]/div[2]/a[3]/i[1]');
        this.iconCheck = page.locator('text=pawTest.png').first();
        this.newIconCheck = page.locator('text=testUpdateName');
        this.deletePicture = page.locator('//body//div[2]/div[1]/div[2]/a[4]');
        
    }
        async clickUploadIcons(){
            await this.uploadIcons;
        }
        async clickEditButton(){
            await this.editButton.first().click();
        }
        async clickDeleteButton(){
            await this.deletePicture.first().click();
        }
    
    
    
    } 