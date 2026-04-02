class CheckoutOverviewPage { 

    // [LOCATORS]
    get pageTitle()         { return cy.get('[data-test="title"]'); }

    get itemName()          { return cy.get('[data-test="inventory-item-name"]'); }

    get itemQuantity()      { return cy.get('[data-test="item-quantity"]'); }
    
    get itemPrice()         { return cy.get('[data-test="inventory-item-price"]'); }
    
    get paymentInfoLabel()  { return cy.get('[data-test="payment-info-label"]'); }
    get paymentInfoValue()  { return cy.get('[data-test="payment-info-value"]'); }

    get shippingInfoLabel() { return cy.get('[data-test="shipping-info-label"]'); }
    get shippingInfoValue() { return cy.get('[data-test="shipping-info-value"]'); }

    get priceTotalLabel()   { return cy.get('[data-test="total-info-label"]'); }
    get itemTotalValue()    { return cy.get('[data-test="subtotal-label"]'); }
    get taxValue()          { return cy.get('[data-test="tax-label"]'); }
    get totalValue()        { return cy.get('[data-test="total-label"]'); }
    
    get finishButton()      { return cy.get('[data-test="finish"]'); }


    // [METHODS]
    verifyPageTitle(title) { 
        this.pageTitle.should('be.visible').and('have.text', title);
    }

    verifyProductDetails(name, quantity, price) { 
        this.itemName.should('be.visible').and('have.text', name);
        this.itemQuantity.should('be.visible').and('have.text', quantity.toString());
        this.itemPrice.should('be.visible').and('have.text', price);
    }

    verifyPaymentInformation(paymentLabel, paymentValue) {
        this.paymentInfoLabel.should('be.visible').and('have.text', paymentLabel);
        this.paymentInfoValue.should('be.visible').and('have.text', paymentValue);
    }

    verifyShippingInformation(shippingLabel, shippingValue) {
        this.shippingInfoLabel.should('be.visible').and('have.text', shippingLabel);
        this.shippingInfoValue.should('be.visible').and('have.text', shippingValue);
    }

    verifyTotalPriceInformation(totalPriceLabel, itemTotal, tax, total) {
        this.priceTotalLabel.should('be.visible').and('have.text', totalPriceLabel);
        this.itemTotalValue.should('be.visible').and('have.text', itemTotal);
        this.taxValue.should('be.visible').and('have.text', tax);
        this.totalValue.should('be.visible').and('have.text', total);
    }

    clickFinishBtn() {
        this.finishButton.click();
    }


    // [WRAPPER METHOD]
    checkoutOverview(data) { 
        this.verifyPageTitle(data.title);
        this.verifyProductDetails(data.name, data.quantity, data.price);
        this.verifyPaymentInformation(data.paymentLabel, data.paymentValue);
        this.verifyShippingInformation(data.shippingLabel, data.shippingValue);
        this.verifyTotalPriceInformation(data.totalPriceLabel, data.itemTotal, data.tax, data.total);
        this.clickFinishBtn();
    }
}

export default new CheckoutOverviewPage();
