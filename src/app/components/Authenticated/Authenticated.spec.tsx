import * as TestUtils from 'test-utils';

import { Authenticated } from './Authenticated';

describe('Authenticated', () => {
  it('redirects registrants to /api/auth/login', async () =>
    withoutLocation(async () => {
      const listener = jest.fn();

      window.location = { assign: listener } as any;

      await TestUtils.roles.auth.emailRegistration(<Authenticated />);

      expect(listener).toHaveBeenCalledWith('/api/auth/login');
    }));

  it('redirects visitors to /api/auth/login', async () =>
    withoutLocation(async () => {
      const listener = jest.fn();

      window.location = { assign: listener } as any;

      await TestUtils.roles.auth.visitor(<Authenticated />);

      expect(listener).toHaveBeenCalledWith('/api/auth/login');
    }));

  it('renders child components for known caregivers', async () => {
    const { findByText } = await TestUtils.roles.auth.caregiver(
      <Authenticated>Interior stuff</Authenticated>
    );

    await findByText('Interior stuff');
  });
});

async function withoutLocation(handler: () => Promise<void>) {
  const originalLocation = window.location;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete window.location;

  await handler();

  window.location = originalLocation;
}
