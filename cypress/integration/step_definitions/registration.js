import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';

Given('User visit register page', () => {
  cy.visit('/');
});

When('User input valid registration data', () => {
  const fakerLastName = faker.name.lastName();
  const fakerEmail = faker.internet.email('Billy', fakerLastName, 'email.com');

  cy.get('input[name="firstName"]').type('Billy');
  cy.get('input[name="lastName"]').type(fakerLastName);
  cy.get('input[name="email"]').type(fakerEmail);
  cy.get('input[name="phoneNumber"]').type('81897845312');
  cy.get('input[name="address"]').type('Jl. Setiabudi');
  cy.get('input[name="password"]').type('Brick123');
  cy.get('input[name="confirm_password"]').type('Brick123');
  cy.get('input[name="register"]').click();
});

When('User input registration data invalid confirmation password', () => {
  const fakerLastName = faker.name.lastName();
  const fakerEmail = faker.internet.email('Billy', fakerLastName, 'email.com');

  cy.get('input[name="firstName"]').type('Billy');
  cy.get('input[name="lastName"]').type(fakerLastName);
  cy.get('input[name="email"]').type(fakerEmail);
  cy.get('input[name="phoneNumber"]').type('81897845312');
  cy.get('input[name="address"]').type('Jl. Setiabudi');
  cy.get('input[name="password"]').type('Brick123');
  cy.get('input[name="confirm_password"]').type('Brick12345');
  cy.get('input[name="register"]').click();
});

Then('User should see display message registration success', () => {
  cy.get('[class*="swal2-popup"]').should('be.visible');
  cy.get('[id*="swal2-title"]').should('have.text', 'Success');
  cy.get('[id*="swal2-content"]').should('have.text', 'Check your email to confirm your registration');
  cy.contains('OK').click();
});

Then('User should see display error message password not matched', () => {
  cy.get('[id*="confirm_password-error"]').should('be.visible');
  cy.get('[id*="confirm_password-error"]').should('have.text', 'Password need to match');
});
