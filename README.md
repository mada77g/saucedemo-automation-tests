# SauceDemo E2E Automation Project

## 📋 Project Overview
This project contains an automated E2E (End-to-End) regression test suite for the [SauceDemo](https://www.saucedemo.com/) platform. The primary goal is to validate the complete purchase flow, from login to order finalization.

## 🛠️ Technology Stack
* **Framework:** Cypress
* **Language:** JavaScript
* **Pattern:** Page Object Model (POM)
* **Principles:** KISS (Keep It Simple, Stupid) & DRY (Don't Repeat Yourself) & SRP (Single Responsibility Principle)

## 📂 Project Structure
* `cypress/e2e/`: Contains the functional test scenario `OrderPlacementE2e.cy.js`.
* `cypress/support/pages/`: Contains the Page Object classes for each section of the application, ensuring modularity and easy maintenance.
* `cypress.config.js`: Main framework configuration file.

## 🧠 Key Engineering Decisions

### **Single Responsibility Principle (SRP)**
Each Page Object class handles only one page or component, ensuring modularity, maintainability, and easier debugging.

### **Data Object Pattern**
A single JavaScript object is used for Checkout Overview validation to avoid the “Long Parameter List” anti-pattern and to improve readability and scalability.

### **Wrapper Methods**
High-level reusable methods (e.g., `userLogin`, `checkoutOverview`) abstract repetitive steps, keeping the test file (`.cy.js`) clean, readable, and accessible even for non-technical stakeholders.

### **Circular Navigation Validation**
The test validates the full navigation loop by ensuring the **Back Home** button correctly returns the user to the Products page after completing an order.


## 🚀 Getting Started

### Prerequisites
* **Node.js** (LTS version recommended)
* **npm** (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mada77g/saucedemo-automation-tests.git
   
2. Navigate to the project folder and install the necessary dependencies:
   ```bash
   npm install
   ```

### ▶️ Test Execution
1. To run the tests in interactive mode (GUI):
   ```bash
   npx cypress open

3. To run the tests in headless mode (CLI):
   ```bash
   npx cypress run

-----------------------------------------------------------------
👨‍💻 Created by a QA Engineer with 4.6 years of experience, focusing on clean code and the KISS principle.
