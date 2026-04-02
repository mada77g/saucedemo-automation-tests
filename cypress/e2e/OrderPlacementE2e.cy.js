import loginPage from "../support/pages/loginPage.js";
import productsPage from "../support/pages/productsPage.js";
import cartPage from "../support/pages/cartPage.js";
import checkoutInformationPage from "../support/pages/checkoutInformationPage.js";
import checkoutOverviewPage from "../support/pages/checkoutOverviewPage.js";
import checkoutCompletePage from "../support/pages/checkoutCompletePage.js";


// ORDER PLACEMENT E2E 
describe(' Order Placement E2E Flow', () => {

    it('Should allow a user to complete an order from start to finish', () => {
        cy.visit('https://www.saucedemo.com/');

        // Perform user authentication
        loginPage.userLogin('standard_user', 'secret_sauce');

        // Verify the Product page and add a product to the cart
        productsPage.addingProduct("Products", 6, 1);
        
        // Verify product details on the Cart page
        cartPage.checkingCartPage('Your Cart', 'Sauce Labs Backpack', 1, '$29.99');

        // Filling the user shipping information
        checkoutInformationPage.checkoutInformation('Checkout: Your Information', 'Johnny', 'Depp', '111234');

        // Prepare test data for the CheckoutOverview page
        const overviewData = {
            title:   'Checkout: Overview',
            name:    'Sauce Labs Backpack',
            quantity: 1,
            price:   '$29.99',
            
            paymentLabel: 'Payment Information:',
            paymentValue: 'SauceCard #31337',
            
            shippingLabel: 'Shipping Information:',
            shippingValue: 'Free Pony Express Delivery!',
            
            totalPriceLabel: 'Price Total',
            itemTotal:       'Item total: $29.99',
            tax:             'Tax: $2.40',
            total:           'Total: $32.39'
        };
        // Verify Checkout Overview order summary
        checkoutOverviewPage.checkoutOverview(overviewData);

        // Confirm successful order placement and return to home
        checkoutCompletePage.checkoutComplete('Checkout: Complete!', 'Thank you for your order!');

        // Verify user is redirected back to the Products page
        productsPage.verifyPageTitle('Products');

    });
});
