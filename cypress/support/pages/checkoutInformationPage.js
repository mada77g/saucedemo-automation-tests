class CheckoutInformationPage {

    // [LOCATORS]
    get pageTitle()      { return cy.get('[data-test="title"]'); }

    get firstNameField() { return cy.get('[data-test="firstName"]'); }

    get lastNameField()  { return cy.get('[data-test="lastName"]'); }

    get zipCodeField()   { return cy.get('[data-test="postalCode"]'); }
    
    get continueButton() { return cy.get('[data-test="continue"]'); }


    // [METHODS]
    verifyPageTitle(title) {
        this.pageTitle.should('be.visible').and('have.text', title );
    }

    insertFirstName(firstName) {
        this.firstNameField.type(firstName);
    }

    insertLastName(lastName) {
        this.lastNameField.type(lastName);
    }

    insertZipCode(zipCode) { 
        this.zipCodeField.type(zipCode);
    }

    clickContinueBtn() { 
        this.continueButton.click();
    }
    

    // [WRAPPER METHOD]
    checkoutInformation(title, firstName, lastName, zipCode) { 
        this.verifyPageTitle(title);
        this.insertFirstName(firstName);
        this.insertLastName(lastName);
        this.insertZipCode(zipCode);
        this.clickContinueBtn();
    }
}
 
export default new CheckoutInformationPage();