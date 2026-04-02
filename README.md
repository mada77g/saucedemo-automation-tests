# SauceDemo E2E Automation Project

## 📋 Project Overview
This project contains an automated E2E (End-to-End) regression test suite for the [SauceDemo](https://www.saucedemo.com/) platform. The primary goal is to validate the complete purchase flow, from login to order finalization.

## 🛠️ Technology Stack
* **Framework:** Cypress
* **Language:** JavaScript
* **Pattern:** Page Object Model (POM)

## 📂 Project Structure
* `cypress/e2e/`: Contains the functional test scenario `OrderPlacementE2e.cy.js`.
* `cypress/support/pages/`: Contains the Page Object classes for each section of the application, ensuring modularity and easy maintenance.
* `cypress.config.js`: Main framework configuration file.

## 🚀 Getting Started

### Prerequisites
* **Node.js** (LTS version recommended)
* **npm** (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/mada77g/saucedemo-automation-tests.git](https://github.com/mada77g/saucedemo-automation-tests.git)
