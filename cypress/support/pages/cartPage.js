class CartPage { 

    // [LOCATORS]
    get pageTitle()  { return cy.get('[data-test="title"]'); }

    get itemName()       { return cy.get('[data-test="inventory-item-name"]'); }
    
    get cartQuantity()   { return cy.get('[data-test="item-quantity"]'); }

    get itemPrice()      { return cy.get('[data-test="inventory-item-price"]'); }
    
    get checkoutButton() { return cy.get('[data-test="checkout"]'); }


    // [METHODS]
    verifyPageTitle(title) { 
        this.pageTitle.should('be.visible').and('have.text', title);
    }

    verifyItemName(name) { 
        this.itemName.should('be.visible').and('have.text', name);
    }

    verifyCartQuantity(quantity) {
        this.cartQuantity.should('be.visible').and('have.text', quantity.toString());
    }

    verifyItemPrice(price) { 
        this.itemPrice.should('be.visible').and('have.text', price)
    }

    clickCheckoutBtn() {
        this.checkoutButton.click();
    }
    

    // [WRAPPER METHOD]
    checkingCartPage(title, name, quantity, price) { 
        this.verifyPageTitle(title);
        this.verifyItemName(name);
        this.verifyCartQuantity(quantity);
        this.verifyItemPrice(price);
        this.clickCheckoutBtn();
    }
}

export default new CartPage();