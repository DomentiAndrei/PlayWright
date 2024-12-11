exports.toursPage = class toursPage{ 

    constructor(page){
        this.page = page;
    
        this.makeNewTour =  page.getByRole('link', { name: 'Make a new tour' });
        this.tourTitle = page.getByPlaceholder('Tour Title');
        this.selectPanorama = page.getByRole('button', { name: 'Select Panorama' });
        this.choosePanormaFromList = page.locator('[data-tippy-content="firstNameCheck"]');
        this.saveButton = page.getByLabel('Save');
        this.createTour = page.getByRole('button', { name: ' create Tour' });

        this.newTourCheck = page.locator('text=testName');
        this.deleteTours = page.getByRole('link', { name: 'Delete' });
        this.checkWarningMessage = page.locator('#new_tour');
        
    }
        async clickMakeNewTour(){
            await this.makeNewTour.click();
        }
        async insertTourTitle(tourName){
            await this.tourTitle.fill(tourName);
        }
        async clickSelectPanorama(){
            await this.selectPanorama.first().click();
        }
        async clickChoosePanormaFromList(){
            await this.choosePanormaFromList.first().click();
        }
        async clickSaveButton(){
            await this.saveButton.click();
        }
        async clickCreateTour(){
          await  this.createTour.click();
        }
        async clickDeleteTours(){
            await  this.deleteTours.first().click();
          }

        
    
    
    
    } 