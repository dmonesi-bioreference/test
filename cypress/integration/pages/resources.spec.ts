/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';
import { Api } from 'test-utils/api';
import { Pages } from 'test-utils/pages';

const authApi = Api.Auth.from(cy);
const resourcesPage = Pages.Resources.from(cy);

describe('on the resources page', () => {
  describe('without a valid session', () => {
    beforeEach(() => {
      authApi.logout();
    });

    it('it redirects on the login page', () => {
      resourcesPage.open();
      resourcesPage.hasText(t('pages.login.title'));
    });
  });

  describe('with a valid session', () => {
    beforeEach(() => {
      authApi.logout();
      authApi.login(
        Cypress.env('AUTH0_USERNAME_TEST_ORDERED'),
        Cypress.env('AUTH0_PASSWORD_TEST_ORDERED')
      );
      resourcesPage.open();
    });

    it('it displays the correct page', () => {
      resourcesPage.hasText(t('pages.resources.title'));
    });

    it('has an articles section', () => {
      resourcesPage.hasText(t('pages.resources.title'));
      resourcesPage.hasTestId('resources--articles-carousel');
    });

    it('has an audio section', () => {
      resourcesPage.hasTestId('resources--audio-card');
    });

    it('has a FAQs section', () => {
      resourcesPage.hasTestId('resources--faqs-carousel');
    });
  });
});
