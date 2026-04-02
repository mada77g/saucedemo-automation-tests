class LoginPage {

    // [LOCATORS]
    get usernameField() { return cy.get('[data-test="username"]'); }

    get passwordField() { return cy.get('[data-test="password"]'); }

    get loginButton()   { return cy.get('[data-test="login-button"]'); }
    

    // [METHODS]
    enterUsername(username) { 
        this.usernameField.type(username);
    }

    enterPassword(pass) { 
        this.passwordField.type(pass);
    }

    clickLoginBtn() {
        this.loginButton.click();
    }


    // [WRAPPER METHOD]
    userLogin(username, pass) { 
        this.enterUsername(username);
        this.enterPassword(pass);
        this.clickLoginBtn();
    }

}

export default new LoginPage();