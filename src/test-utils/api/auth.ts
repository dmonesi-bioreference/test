/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';

export class Auth {
  static from(client: typeof cy) {
    // TODO: TB - Catch errors on redirect after login, seems to be a Chrome
    // security vs Cypress issue as it's not reproducable outside of Cypress
    if (Cypress.config().baseUrl == 'http://localhost:3000') {
      Cypress.on('uncaught:exception', (e) => {
        if (e.message.includes('checks.state argument is missing')) {
          return false;
        }
      });
    }
    // TODO: END

    return new Auth(client);
  }

  constructor(private client: typeof cy) {}

  register(guid: string, expectInvalidGuid?: boolean) {
    this.client.intercept(`/?Guid=${guid}`).as('page_load');
    this.client.visit(`/?Guid=${guid}`);
    this.client.wait('@page_load');

    if (expectInvalidGuid) {
      // At present we allow invalid guids to enter the registraiton flow
      const localization = t('pages.onboarding.actions.beginRegistration');
      this.client.findByText(localization);
    } else {
      const localization = t('pages.onboarding.actions.beginRegistration');
      this.client.findByText(localization);
    }
  }

  login(
    username: string,
    password: string,
    expectInvalidCredentials?: boolean
  ) {
    // This function is over-commented because the OIDC flow is complex and
    // very easy to break, in some cases waits are separated, the wait function
    // is causing some thing to block, so doing them all in one call deadlocks
    // the entire flow

    // Create a bunch of intercepts so we can figure out the correct times to trigger
    // parts of the OIDC flow
    this.client.intercept('/api/auth/callback?*').as('callback');
    this.client.intercept('/api/auth/login').as('login');
    this.client.intercept('/api/auth/me').as('me_load');
    this.client.intercept('/api/identity/profile').as('profile_load');
    this.client.intercept('/api/tests').as('tests_load');
    this.client.intercept('/').as('page_load');
    this.client.intercept(`${Cypress.env('AUTH0_ROOT')}/login*`).as('auth0_login');
    this.client.intercept(`${Cypress.env('AUTH0_ROOT')}/authorize*`).as('auth0_authorize');
    this.client.intercept('https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location').as('onetrust_load')

    // Visit the page, wait for the state machine to determine we are not
    // logged in to the application
    this.client.visit('/');
    this.client.log('Wait for app to determine we are not logged in');
    this.client.wait(['@page_load', '@me_load']);
    
    // State machine will trigger the login flow, redirecting to auth0, which
    // should also determine we are not logged in to auth0
    this.client.log('Wait for auth0 to determine we are not logged in');
    this.client.wait(['@login', '@auth0_authorize', '@auth0_login']);

    // At some point after page load the One Trust cookie popup will
    // cover the screen and make the email, password, and login components
    // inaccessible
    this.client.wait('@onetrust_load').then(() => {
      // React style findBy... aren't working here
      cy.get('#onetrust-pc-btn-handler').click();
      cy.get('.ot-pc-refuse-all-handler').click();
    })

    this.client.findByText('Email', { exact: false }).type(username);
    this.client.findByText('Password', { exact: false }).type(password);
    this.client.findByRole('button', { name: 'Login' }).click();

    if (expectInvalidCredentials) {
      const localization = t('sections.identity.errors.title');
      this.client.findByText(localization);
    } else {
      // Wait for auth0 to redirect back to our application
      this.client.log('Wait for auth0 to complete');
      this.client.wait('@callback');

      // TODO: TB - The final redirect is broken within Cypress, so we do
      // it manually
      this.client.visit('/');

      // Wait for the redirect to complete, and check if we are logged in to
      // the application
      this.client.log('Wait for app to again determine not logged in');
      this.client.wait(['@page_load', '@me_load']);

      // State machine will again trigger the login flow, redirecting to auth0
      // which this time will be logged in, so immediately redirect to our
      // application
      this.client.log('Wait for auth0 to determine we are now logged in');
      this.client.wait(['@login', '@auth0_authorize', '@callback']);
      // TODO: END

      // Wait for the redirect after auth0 login
      this.client.log(
        'Wait for the final redirect after successful auth0 login'
      );
      this.client.wait(['@page_load']);

      // Wait for the state machine to complete loading information
      this.client.log('Wait for the application to load state machine data');
      this.client.wait(['@me_load', '@profile_load', '@tests_load']);
    }
  }

  logout(): any {
    this.client.request(`${Cypress.env('AUTH0_ROOT')}/v2/logout`);
    this.client.intercept('/api/auth/logout').as('app_logout');
    this.client.visit('/api/auth/logout');
    this.client.wait('@app_logout');
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}
