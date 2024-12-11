exports.userPage = class userPage{ 

    constructor(page){
        this.page = page;
    
        this.firstName =  page.locator('#user_first_name');
        this.lastName =  page.locator('#user_last_name');
        this.phone =  page.locator('#user_phone');
        this.street =  page.locator('#user_street_address');
        this.city =  page.locator('#user_city');
        this.state =  page.locator('#user_state');
        this.zipCode =  page.locator('#user_zip');
        this.updateButton =  page.getByRole('button', { name: 'Update' });
    }
    async insertFirstName(firstname){
        await this.firstName.fill(firstname);
    }
    async insertLastName(lastname){
        await this.lastName.fill(lastname);
    }
    async insertPhonE(phonE){
        await this.phone.fill(phonE);
    }
    async insertStreet(streeT){
        await this.street.fill(streeT);
    }
    async insertCity(citY){
        await this.city.fill(citY);
    }
    async insertState(statE){
        await this.state.fill(statE);
    }
    async insertZipCode(zipcode){
        await this.zipCode.fill(zipcode);
    }
    async clickUpdateButton(){
        await this.updateButton.click();
    }

    async insertValues(firstname,lastname,phonE,streeT,citY,statE,zipcode){
        await this.insertFirstName(firstname);
        await this.insertLastName(lastname);
        await this.insertPhonE(phonE);
        await this.insertStreet(streeT);
        await this.insertCity(citY);
        await this.insertState(statE);
        await this.insertZipCode(zipcode);
        await this.clickUpdateButton();
    }

}