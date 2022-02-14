/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
describe('Demo pages', () => {
  describe('Valid routes', () => {
    const validRoutes = [
      '',
      // 'authentication-token',
      'article/82074',
      // 'data-consent',
      // 'data-sharing-settings',
      'health-profile',
      'identity-form',
      // 'location-check',
      'login',
      'account-settings',
      'registration',
      'resources',
      'resources/faqs',
      'test-results',
      // 'testing-process',
    ];

    for (const route of validRoutes) {
      it(`has a route for /demo/${route}`, () => {
        cy.visit(`/demo/${route}`);
      });
    }
  });

  describe('Invalid routes', () => {
    it('renders 404 for invalid routes', () => {
      const page = cy.visit('/demo/invalid', {
        failOnStatusCode: false,
      });

      page.contains('404');
      page.document().contains('This page could not be found');
    });
  });
});

export {};
