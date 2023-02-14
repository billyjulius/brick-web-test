import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User visit login page', () => {
  cy.visit('/');
  cy.contains('Login').click();
});

When('User login with valid credentials', () => {
  cy.get('input[name="email"]').type('billytest@email.com');
  cy.get('input[name="password"]').type('Brick123');
  cy.get('input[name="login"]').click();
});

When('User login with invalid credentials', () => {
  cy.get('input[name="email"]').type('billytest@email.com');
  cy.get('input[name="password"]').type('Brick12345');
  cy.get('input[name="login"]').click();
});

Then('User should see display message login success', () => {
  cy.get('[class*="swal2-popup"]').should('be.visible');
  cy.get('[class*="swal2-content"]').should('have.text', 'Welcome Back, Cyborg Synch Brain!');
  cy.contains('OK').click();
});

Then('User should see logout button', () => {
  cy.get('a[href*="logout"]').should('be.visible');
});

Then('User should see display error message invalid credentials', () => {
  cy.get('[class*="swal2-popup"]').should('be.visible');
  cy.get('[class*="swal2-content"]').should('have.text', 'Wrong email or password');
});
