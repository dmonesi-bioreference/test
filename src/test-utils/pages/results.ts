/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

export class Results {
  static from(client: typeof cy) {
    return new Results(client);
  }

  constructor(private client: typeof cy) {}

  open(params?: Record<string, string>, expectSuccess = true) {
    let url = '/results';
    
    if (params) {
      const urlParams = new URLSearchParams(params);
      url += `?${urlParams.toString()}`;
    } 

    const waits = Array<string>();
    this.client.intercept(url).as('page_load');
    waits.push('@page_load');

    if (expectSuccess) {
      this.client.intercept('/api/tests').as('tests_load');
      waits.push('@tests_load');
    }
    
    this.client.visit(url);
    this.client.wait(waits);
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}
