exports.homePage = class homePage{
    constructor(page){
        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.emailAddress = page.getByLabel('Email address');
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        this.password =  page.getByLabel('Password');
        this.signIn = page.getByRole('button', { name: 'Sign in' });
        this.checkMessage = page.locator('#error-element-password');
    }
    async clickloginButton(){
        await this.loginButton.click();
    }
    async enterEmailAddress(email){
        await this.emailAddress.fill(email);
    }
    async clickContinueButton(){
        await this.continueButton.click();
    }
    async enterPassword(passWord){
        // await this.password.click();
        await this.password.fill(passWord)
    }
    async clickSignInButton(){
        await this.signIn.click();
    }
}