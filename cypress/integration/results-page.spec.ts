/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';
import { Api } from 'test-utils/api';
import { Pages } from 'test-utils/pages';

const authApi = Api.Auth.from(cy);
const resultsPage = Pages.Results.from(cy);

describe('on the results page', () => {  
  describe('without a valid session', () => {
    beforeEach(() => {
      authApi.logout();
    });

    it('it redirects on the login page', () => {
      resultsPage.open(undefined, false);
      resultsPage.hasText(t('pages.login.title'));
    });
  });

  describe('with a valid session', () => {
    describe('which has ordered tests', () => {
      beforeEach(() => {
        authApi.logout();
        authApi.login(
          Cypress.env('AUTH0_USERNAME_TEST_ORDERED'),
          Cypress.env('AUTH0_PASSWORD_TEST_ORDERED')
        );
      });

      it('it displays the tests as in progress', () => {
        resultsPage.open();
        resultsPage.hasText(t('pages.results.waiting.title'));
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

      it('it displays the tests as in progress', () => {
        resultsPage.open();
        resultsPage.hasText(t('pages.results.waiting.title'));
      });
    });

    // describe('which has ready but unviewed tests', () => {
    //   beforeEach(() => {
    //     authApi.logout();
    //     authApi.login(
    //       Cypress.env('AUTH0_USERNAME_RESULTS_READY'),
    //       Cypress.env('AUTH0_PASSWORD_RESULTS_READY')
    //     );
    //   });
      
    //   it('it displays the tests as ready', () => {
    //     resultsPage.open();
    //     resultsPage.hasText(t('pages.results.preResultsPause.title'));
    //   });
    // });

    // describe('which has viewed tests', () => {
    //   beforeEach(() => {
    //     authApi.logout();
    //     authApi.login(
    //       Cypress.env('AUTH0_USERNAME_RESULTS_VIEWED'),
    //       Cypress.env('AUTH0_PASSWORD_RESULTS_VIEWED')
    //     );
    //   });
      
    //   it('it dispalys the tests as ready', () => {
    //     resultsPage.open();
    //     resultsPage.hasText(t('pages.results.ready.title'));
    //   });
    // });
  });
});
