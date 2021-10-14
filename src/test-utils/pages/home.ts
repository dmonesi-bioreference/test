/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

export class Home {
  static from(client: typeof cy) {
    return new Home(client);
  }

  constructor(private client: typeof cy) {}

  open() {
    this.client.visit('http://localhost:3000');
  }

  hasText(name: string): ReturnType<typeof cy['findByText']> {
    return this.client.findByText(name);
  }
}
