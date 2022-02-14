/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';
import { Api } from 'test-utils/api';
import { Pages } from 'test-utils/pages';

const authApi = Api.Auth.from(cy);
const landingPage = Pages.Landing.from(cy);

describe('on the landing page', () => {  
  describe('without a valid session', () => {
    beforeEach(() => {
      authApi.logout();
    });

    it('it redirects on the login page', () => {
      landingPage.open();
      landingPage.hasText(t('pages.login.title'));
    });
  });

  describe('with a valid session', () => {
    describe('which has tests ordered', () => {
      beforeEach(() => {
        authApi.logout();
        authApi.login(
          Cypress.env('AUTH0_USERNAME_TEST_ORDERED'),
          Cypress.env('AUTH0_PASSWORD_TEST_ORDERED')
        );
      });

      it('it displays the tests as ordered', () => {
        landingPage.open();
        landingPage.hasText(t('sections.results.inProgress'));
        // landingPage.hasText(t('sections.results.expected'));
      });
    });

    describe('which has tests in the lab', () => {
      beforeEach(() => {
        authApi.logout();
        authApi.login(
          Cypress.env('AUTH0_USERNAME_TEST_IN_LAB'),
          Cypress.env('AUTH0_PASSWORD_TEST_IN_LAB')
        );
      });

      it('it displays the tests as in the lab', () => {
        landingPage.open();
        landingPage.hasText(t('sections.results.inProgress'));
        // landingPage.hasText(t('sections.results.expected'));
      });
    });

    describe('which has ready but unviewed tests', () => {
      beforeEach(() => {
        authApi.logout();
        authApi.login(
          Cypress.env('AUTH0_USERNAME_RESULTS_READY'),
          Cypress.env('AUTH0_PASSWORD_RESULTS_READY')
        );
      });
      
      it('it displays the tests as ready', () => {
        landingPage.open();
        landingPage.hasText(t('sections.results.ready'));
        // landingPage.hasText(t('sections.results.doctorShared'));
      });
    });

    describe('which has viewed tests', () => {
      beforeEach(() => {
        authApi.logout();
        authApi.login(
          Cypress.env('AUTH0_USERNAME_RESULTS_VIEWED'),
          Cypress.env('AUTH0_PASSWORD_RESULTS_VIEWED')
        );
      });
      
      it('it dispalys the tests as ready', () => {
        landingPage.open();
        landingPage.hasText(t('sections.results.ready'));
        // landingPage.hasText(t('sections.results.doctorShared'));
      });
    });
  });
});
