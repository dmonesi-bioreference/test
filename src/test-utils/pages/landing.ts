/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

export class Landing {
  get rootUrl(): string {
    return '/'
  }

  static from(client: typeof cy) {
    return new Landing(client);
  }

  constructor(private client: typeof cy) {}

  open(params?: Record<string, string>) {
    let url = this.rootUrl;
    
    if (params) {
      const urlParams = new URLSearchParams(params);
      url += `?${urlParams.toString()}`;
    } 

    this.client.intercept(url).as('page_load');    
    this.client.visit(url);
    this.client.wait('@page_load');
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}
