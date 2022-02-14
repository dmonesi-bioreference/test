/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';

export class Menu {
  static from(client: typeof cy) {
    return new Menu(client);
  }

  constructor(private client: typeof cy) {}

  openMenu() {
    this.client
      .findByRole('button', {name: 'Open menu'})
      .click()
      .parent()
      .parent()
      .within(() => {
        cy.findByRole('button', { name: t('sections.mainNav.home.label') });
        cy.findByRole('button', { name: t('sections.mainNav.results.label') });
        cy.findByRole('button', { name: t('sections.mainNav.healthProfile.label') });
        cy.findByRole('button', { name: t('sections.mainNav.resources.label') });
        cy.findByRole('button', { name: t('sections.mainNav.settings.label') });
        cy.findByRole('button', { name: t('sections.mainNav.logout.label') });
      });
  }

  clickMenuOption(name: string) {
    this.client
      .findByRole('button', {name: 'Open menu'})
      .click()
      .parent()
      .parent()
      .within(() => {
        cy.findByRole('button', { name: name }).click();
      });
  }
}
