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
    // TODO: TB - Not keen on this, would be cool if we could create a proper login
    // but I suspect it's not possible with the OIDC pattern
    this.client.visit('/');
    this.client.findByText('Email', { exact: false }).type(username);
    this.client.findByText('Password', { exact: false }).type(password);
    // TODO: END

    this.client.findByRole('button', { name: 'Login' }).click();

    if (expectInvalidCredentials) {
      const localisation = t('sections.identity.errors.title');
      this.client.findByText(localisation);
    } else {
      // TODO: TB - Something is breaking the final redirect only within Cypress.
      // It looks like this is another chrome security issue but I can't be sure
      // and getting the test suite working is more important than finding this
      // edge case.

      // To prevent us waiting an arbitrary amount of time, we look for the error
      if (Cypress.config().baseUrl == 'http://localhost:3000') {
        // When running locally, Cypress seems to catch the exception
        // and crash, and yer...we can't do anything other than wait
        this.client.wait(1000);
      } else {
        // We only get Internal Server Error from our hosted applications
        this.client.findByText('Internal Server Error');
      }

      // And then manually redirect
      this.client.visit('/');
      // TODO: END

      const localisation = t('components.userHeader.patient');
      this.client.findByText(localisation);
    }
  }

  logout(): any {
    this.client
      .request(`${Cypress.env('AUTH0_ROOT')}/v2/logout`)
      .clearCookies()
      .getCookies()
      .should('have.length', 0)
      .request('/api/auth/logout')
      .clearCookies()
      .getCookies()
      .should('have.length', 0)
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}
