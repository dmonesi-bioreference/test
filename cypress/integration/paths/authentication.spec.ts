/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';
import { Api } from 'test-utils/api';
import { Pages } from 'test-utils/pages';

const landingPage = Pages.Landing.from(cy);
const authApi = Api.Auth.from(cy);

describe('on the home page', () => {
  describe('without a valid session', () => {
    beforeEach(() => {
      authApi.logout();
    });

    describe('with an invalid GUID url parameter', () => {
      it('it lands on the begin registration page', () => {
        authApi.register('1234', true);
      });
    });

    describe('with a GUID url parameter', () => {
      it('it lands on the identify verification page', () => {
        authApi.register(Cypress.env('AUTH0_GUID_TEST_ORDERED'));
      });
    });

    describe('without any url parameters', () => {
      it('it lands on the login page', () => {
        landingPage.open();
        authApi.hasText(t('pages.login.title'));
      });

      it('it can log in and lands on the landing page', () => {
        authApi.login(
          Cypress.env('AUTH0_USERNAME_TEST_ORDERED'),
          Cypress.env('AUTH0_PASSWORD_TEST_ORDERED')
        );
        authApi.hasText(t('components.patientBanner.label'));
      });

      it("it won't login with invalid credentials", () => {
        authApi.login('invalid@email.com', 'Inv@lidP@55w0rd', true);
        authApi.hasText(t('sections.identity.errors.title'));
      });
    });

    // TODO: TB - It would be nice to test the 'you have x attempts remaining'
    // but at present this never seems to show
  });

  describe('with a valid session', () => {
    beforeEach(() => {
      authApi.logout();
      authApi.login(
        Cypress.env('AUTH0_USERNAME_TEST_ORDERED'),
        Cypress.env('AUTH0_PASSWORD_TEST_ORDERED')
      );
    });

    // TODO: TB - It would be nice to check what happens if you navigate to
    // a registration link whilst still logged in, but at present this
    // doesn't trigger at all

    describe('without any url parameters', () => {
      it('can log out', () => {
        authApi.logout();
      });

      it('it lands on the landing page', () => {
        landingPage.open();
        authApi.hasText(t('components.patientBanner.label'));
      });
    });
  });
});
