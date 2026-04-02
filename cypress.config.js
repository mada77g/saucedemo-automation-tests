const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}', //.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // headed: true, // ruleaza Cypress in mod implicit in modul headed (adica deschide browserul)
  // video: true 

  headed: true, // ruleaza Cypress in mod implicit in modul headed (adica deschide browserul) doar daca nu se seteaza variabila de mediu CYPRESS_HEADLESS
  video: process.env.CYPRESS_HEADLESS === 'true' // activati inregistrarea video numai dacă se rulează in mod headless  => comanda asta:--headless --env CYPRESS_HEADLESS=true se adauga la path-ul carui test vreau sa-l rulez.
  // Daca vreau sa revin la setarea initiala: $env:CYPRESS_HEADLESS = "" , si verific prin: echo $env:CYPRESS_HEADLESS care trebuie sa returneze un rezultat gol(fara nicio valoare).
});
