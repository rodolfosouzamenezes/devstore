/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
    visitProduct(): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')
  cy.get('input[name=q]').type(query).parent('form').submit()
})

Cypress.Commands.add('visitProduct', () => {
  cy.get('a[href^="/product"]').first().click()
  cy.url().should('include', '/product')
})
