exports.mainMenuPage = class mainMenuPage{ 

    constructor(page){
        this.page = page;
        this.home = page.getByRole('link', { name: 'Home' });
        this.navigation = page.locator('.navbar-brand');
        this.icons = page.getByRole('link', { name: ' Icons' });
        this.pictures = page.getByRole('link', { name: 'Pictures' });
        this.multimedia = page.getByRole('link', { name: ' Multimedia' });

        this.tours = page.getByRole('link', { name: ' Icons' });

        this.audios = page.getByRole('link', { name: ' Audios' });
        this.account = page.locator('li').filter({ hasText: 'Account Help Logout' }).getByRole('link').nth(1);

    }
    async clickAllMaps(){
        await this.home.click();
    }
    async clickIcons(){
        await this.icons.click();
    }
    async clickPictures(){
        await this.pictures.click();
    }
    async clickMultimedia(){
        await this.multimedia.click();
    }
    async clickAudios(){
        await this.audios.click();
    }
    async clickAccount(){
        await this.account.click();
    }
    async clickTours(){
        await this.tours.click();
    }
}