/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a logo', () => {
    cy.findByLabelText('logo');
  });
});
