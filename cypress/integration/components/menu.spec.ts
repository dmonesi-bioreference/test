/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';
import { Api } from 'test-utils/api';
import { Components } from 'test-utils/components';
import { Pages } from 'test-utils/pages';

const healthProfilePage = Pages.HealthProfile.from(cy);
const landingPage = Pages.Landing.from(cy);
const resultsPage = Pages.Results.from(cy);
const menuComponent = Components.Menu.from(cy);
const authApi = Api.Auth.from(cy);

describe('on the landing page', () => {
  // describe('without a valid session', () => {
  //   beforeEach(() => {
  //     authApi.logout();
  //   });

  //   it('it redirects on the login page', () => {
  //     landingPage.open();
  //     landingPage.hasText(t('pages.login.title'));
  //   });
  // });

  describe('with a valid session', () => {
    before(() => {
      authApi.logout();
      authApi.login(
        Cypress.env('AUTH0_USERNAME_TEST_ORDERED'),
        Cypress.env('AUTH0_PASSWORD_TEST_ORDERED')
      );
    });

    beforeEach(() => {
      landingPage.open()
    })

    it('has a menu', () => {
      menuComponent.openMenu();
    });
    
    it('can navigate to the home page', () => {
      menuComponent.clickMenuOption(t('sections.mainNav.home.label'))
      cy.url().should('equal', `${Cypress.config().baseUrl}${landingPage.rootUrl}`)
    })
    
    it('can navigate to the results page', () => {
      menuComponent.clickMenuOption(t('sections.mainNav.results.label'))
      cy.url().should('equal', `${Cypress.config().baseUrl}${resultsPage.rootUrl}`)
    })
    
    it('can navigate to the health profile page', () => {
      menuComponent.clickMenuOption(t('sections.mainNav.healthProfile.label'))
      cy.url().should('equal', `${Cypress.config().baseUrl}${healthProfilePage.rootUrl}`)
    })
    
    it('can navigate to the resources page', () => {
      menuComponent.clickMenuOption(t('sections.mainNav.resources.label'))
      // cy.url().should('equal', `${Cypress.config().baseUrl}${resourcesPage.rootUrl}`)
    })
    
    it('can navigate to the settings page', () => {
      menuComponent.clickMenuOption(t('sections.mainNav.settings.label'))
      // cy.url().should('equal', `${Cypress.config().baseUrl}${settingsPage.rootUrl}`)
    })

    it('can logout', () => {
      menuComponent.clickMenuOption(t('sections.mainNav.logout.label'))
    })
  });
});
