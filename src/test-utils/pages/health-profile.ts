/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

export class HealthProfile {
  static from(client: typeof cy) {
    return new HealthProfile(client);
  }

  constructor(private client: typeof cy) {}

  open(params?: Record<string, string>, expectSuccess = true) {
    let url = '/health-profile';
    
    if (params) {
      const urlParams = new URLSearchParams(params);
      url += `?${urlParams.toString()}`;
    } 

    const waits = Array<string>();
    this.client.intercept(url).as('page_load');
    waits.push('@page_load');

    if (expectSuccess) {
      this.client.intercept('/api/identity/profile').as('profile_load');
      waits.push('@profile_load');
    }
    
    this.client.visit(url);
    this.client.wait(waits);
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
      .within(() => {
        cy.findByText(name, { exact: false })
          .parent()
          .findByText(value, { exact: false });
      });
  }
}
