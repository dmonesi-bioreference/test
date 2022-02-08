/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

export class Landing {
  static from(client: typeof cy) {
    return new Landing(client);
  }

  constructor(private client: typeof cy) {}

  open(params?: Record<string, string>) {
    let url = '/';
    
    if (params) {
      const urlParams = new URLSearchParams(params);
      url += `?${urlParams.toString()}`;
    } 

    this.client.visit(url);
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}