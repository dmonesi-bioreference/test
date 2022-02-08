/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

export class HealthProfile {
  static from(client: typeof cy) {
    return new HealthProfile(client);
  }

  constructor(private client: typeof cy) {}

  open(params?: Record<string, string>) {
    let url = '/health-profile';
    
    if (params) {
      const urlParams = new URLSearchParams(params);
      url += `?${urlParams.toString()}`;
    } 

    this.client.visit(url);
  }

  hasSection(name: string) {
    this.client.findByText(name);
  }

  hasField(section: string, name: string, value: string) {
    this.client
      .findByText(section, { exact: false })
      .parent()
      .parent()
      .parent()
      .parent()
      .within((element) => {
        cy.findByText(name, { exact: false })
          .parent()
          .findByText(value, { exact: false });
      });
  }
}
