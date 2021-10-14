/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('Demo pages', () => {
  describe('route verifications', () => {
    const validRoutes = [
      '',
      'authentication-form',
      'data-consent',
      'data-sharing-settings',
      'location-check',
      'nicu-faqs',
      'testing-process',
      'resources/any-given-slug-1234',
      'registration',
    ];

    for (const route of validRoutes) {
      it(`has a route for /${route}`, () => {
        cy.visit(`http://localhost:3000/demo/${route}`);
      });
    }
  });
});
