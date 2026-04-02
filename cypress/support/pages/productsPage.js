class ProductsPage { 

    // [LOCATORS]
    get pageTitle()       { return cy.get('[data-test="title"]'); }

    get inventoryList()   { return cy.get('[data-test="inventory-list"]'); }
    
    get inventoryItems()  { return cy.get('[data-test="inventory-item"]'); }

    get addBackpack()     { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    
    get cartIconButton()  { return cy.get('[data-test="shopping-cart-link"]'); }
    
    get cartCounter()     { return cy.get('[data-test="shopping-cart-badge"]'); }
    

    // [METHODS]
    verifyPageTitle(title) { 
        this.pageTitle.should('be.visible').and('have.text', title)
    }

    verifyInventoryList() { 
        this.inventoryList.should('be.visible');
    }

    verifyInventoryItems(items) { 
        this.inventoryItems.should('have.length', items);
    }

    clickAddBackpack() { 
        this.addBackpack.click();
    }

    verifyCartCounter(count) { 
        this.cartCounter.should('be.visible').and('have.text', count.toString());
    }

    clickCartIconBtn() { 
        this.cartIconButton.click();
    }

    
    // [WRAPPER METHOD]
    addingProduct(title, items, count) { 
        this.verifyPageTitle(title);
        this.verifyInventoryList();
        this.verifyInventoryItems(items);
        this.clickAddBackpack();
        this.verifyCartCounter(count);
        this.clickCartIconBtn();
    }
}

export default new ProductsPage();