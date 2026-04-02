class CheckoutCompletePage {

    // [LOCATORS]
    get pageTitle()      { return cy.get('[data-test="title"]'); }

    get thanksMessage()  { return cy.get('[data-test="complete-header"]'); }

    get backHomeButton() { return cy.get('[data-test="back-to-products"]'); }


    // [METHODS]
    verifyPageTitle(title) { 
        this.pageTitle.should('be.visible').and('have.text', title);
    }

    verifyThanksMessage(thxMessage) { 
        this.thanksMessage.should('be.visible').and('have.text', thxMessage);
    }

    clickBackHomeBtn() { 
        this.backHomeButton.click();
    }


    // [WRAPPER METHOD]
    checkoutComplete(title, thxMessage) { 
        this.verifyPageTitle(title);
        this.verifyThanksMessage(thxMessage);
        this.clickBackHomeBtn();
    }
}
 
export default new CheckoutCompletePage();