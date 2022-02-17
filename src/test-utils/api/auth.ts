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
    // Create a bunch of intercepts so we can figure out the correct times to trigger
    // parts of the OIDC flow
    this.client.intercept('/api/auth/callback?*').as('callback');
    this.client.intercept('/api/auth/login').as('login');
    this.client.intercept('/api/auth/me').as('me_load');
    this.client.intercept('/api/identity/profile').as('profile_load');
    this.client.intercept('/api/tests').as('tests_load');
    this.client.intercept(`${Cypress.env('AUTH0_ROOT')}/login*`).as('auth_page_load');
    this.client.intercept('/').as('app_page_load');
    this.client.intercept('https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location').as('onetrust_load')
    
    this.client.visit('/');
    this.client.wait(['@app_page_load', '@auth_page_load']);
    // Intentionally separate steps. Wait seems to do something to prevent the
    // state machine in the auth0 page from continuing and triggering the 
    // /api/auth/me call
    this.client.wait(['@me_load', '@login']);

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
      // Wait for our intercept to detect the auth process has completed
      this.client.wait('@callback');

      // TODO: TB - The redirect is broken within Cypress, so we do it manually
      this.client.visit('/');
      // TODO: END

      // Wait for the app to load
      this.client.wait('@app_page_load');

      // Wait for the app to figure out it's not logged in, and
      // trigger the login flow
      this.client.log('waiting for login flow')
      this.client.wait(['@app_page_load']);
      this.client.wait(['@me_load', '@login', '@callback']);
      
      // Wait for the state machine to complete loading information
      this.client.log('waiting for state machine')
      this.client.wait(['@me_load', '@profile_load', '@tests_load'])
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
