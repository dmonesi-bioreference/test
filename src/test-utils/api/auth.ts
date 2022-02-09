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
    this.client.visit(`/?Guid=${guid}`);

    if (expectInvalidGuid) {
      const localisation = t('pages.login.title');
      this.client.findByText(localisation)
    } else {
      const localisation = t('sections.identity.subTitle');
      this.client.findByText(localisation)
    }
  }

  login(username: string, password: string, expectInvalidCredentials?: boolean) {
    // Create an intercept to detect when the auth process has completed
    this.client.intercept('/api/auth/callback*').as('callback')

    // TODO: TB - Not keen on this, would be cool if we could create a proper login
    // but I suspect it's not possible with the OIDC pattern
    this.client.visit('/');
    this.client.findByText('Email', { exact: false }).type(username);
    this.client.findByText('Password', { exact: false }).type(password);
    this.client.findByRole('button', { name: 'Login' }).click();
    // TODO: END
    
    if (expectInvalidCredentials) {
      const localisation = t('sections.identity.errors.title');
      this.client.findByText(localisation);
    } else {
      // Wait for our intercept to detect the auth process has completed
      this.client.wait('@callback')
      
      // TODO: TB - The redirect is broken within Cypress, so we do it manually
      this.client.visit('/')
      // TODO: END
    }
  }

  logout(): any {
    this.client
      .request(`${Cypress.env('AUTH0_ROOT')}/v2/logout`)
      .clearCookies()
    this.client
      .getCookies()
      .should('have.length', 0)
    this.client
      .request('/api/auth/logout')
      .clearCookies()
    this.client
      .getCookies()
      .should('have.length', 0)
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}
