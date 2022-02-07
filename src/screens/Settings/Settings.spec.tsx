import { screen } from '@testing-library/react';

import { Mocks, renderWithShell } from 'test-utils';

import { Settings } from './index';

describe('The Settings Page', () => {
  it('does not explode', async () => {
    await renderWithShell(<Settings />);
  });

  it('fetches the profile', async () => {
    const listener = jest.fn(async () => Promise.reject('boink'));

    await renderWithShell(<Settings />, {
      requests: { identityProfile: listener },
    });

    expect(listener).toHaveBeenCalled();
  });

  it('displays a spinning indicator while loading', async () => {
    await renderWithShell(<Settings />, {
      requests: {
        identityProfile: async () => {
          await new Promise((resolve) => setTimeout(resolve, 10_000_000));
          return Promise.reject('oh noooooo');
        },
      },
    });

    const asyncRegion = await screen.findByRole('region', {
      name: 'loaded content',
    });
    expect(asyncRegion.textContent).toContain('My Account');
    expect(+asyncRegion.style.opacity).toBeLessThan(1);
  });

  it('has a title', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('Settings');
  });

  it('contains account details', async () => {
    const nickname = 'Barb';
    const name = 'Hanna Barbara';
    const page = await renderWithShell(<Settings />, {
      requests: {
        identityProfile: async () =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          ({
            caregiver_name: name,
            caregiver_nickname: nickname,
          } as any),
      },
    });

    await page.findByText('Nickname');
    await page.findByText(nickname);
    await page.findByText('Full Name');
    await page.findByText(name);
  });

  it('contains contact details', async () => {
    const phoneNumber = '333 333 3333';
    const page = await renderWithShell(<Settings />, {
      onSession: async () => Mocks.session.single,
      requests: {
        identityProfile: async () =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          ({
            phone_number: phoneNumber,
          } as any),
      },
    });

    await page.findByText('Email Address');
    await page.findByText(Mocks.session.single.email);
    await page.findByText('Phone Number');
    await page.findByText(phoneNumber);
    await page.findByText('Preferred Contact Method');
  });

  it('has an option to delete the account', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('Delete My Account');
  });
});
