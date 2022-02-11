/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';

export class Auth {
  static from(client: typeof cy) {
    // TODO: TB - Catch errors discussed later in this file
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
      const localization = t('pages.login.title');
      this.client.findByText(localization);
    } else {
      const localization = t('sections.identity.subTitle');
      this.client.findByText(localization);
    }
  }

  login(
    username: string,
    password: string,
    expectInvalidCredentials?: boolean
  ) {
    // Create an intercept to detect when the auth process has completed
    this.client.intercept('/api/auth/callback*').as('callback');
    
    // TODO: TB - Not keen on this, would be cool if we could create a proper login
    // but I suspect it's not possible with the OIDC pattern
    this.client.intercept(`${Cypress.env('AUTH0_ROOT')}/login*`).as('auth_page_load');
    this.client.visit('/');
    this.client.wait('@auth_page_load');
    this.client.findByText('Email', { exact: false }).type(username);
    this.client.findByText('Password', { exact: false }).type(password);
    this.client.findByRole('button', { name: 'Login' }).click();
    // TODO: END

    if (expectInvalidCredentials) {
      const localization = t('sections.identity.errors.title');
      this.client.findByText(localization);
    } else {
      // Wait for our intercept to detect the auth process has completed
      this.client.wait('@callback');

      // TODO: TB - The redirect is broken within Cypress, so we do it manually
      this.client.intercept('/').as('app_page_load');
      this.client.intercept('/api/auth/login').as('login');
      this.client.visit('/');
      this.client.wait(['@app_page_load', '@login']);
      // TODO: END

      const localization = t('components.patientBanner.label');
      this.client.findByText(localization);
    }
  }

  logout(): any {
    this.client.request(`${Cypress.env('AUTH0_ROOT')}/v2/logout`);
    
    this.client.clearCookies();
    this.client.getCookies().should('have.length', 0);

    this.client.intercept('/api/auth/logout').as('app_logout');
    this.client.visit('/api/auth/logout');
    this.client.wait('@app_logout');
    
    this.client.clearCookies();
    this.client.getCookies().should('have.length', 0);
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}
