import userEvents from '@testing-library/user-event';

import { renderWithShell } from 'test-utils';

import { LandingPage } from './LandingPage';

describe('The home page', () => {
  it('does not explode', async () => {
    await renderWithShell(<LandingPage />);
  });

  it("features the patient's name", async () => {
    const name = 'Lisa Consuela Jackson';
    const page = await renderWithShell(<LandingPage />, {
      requests: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        identityProfile: async () => ({ patient_name: name } as any),
      },
    });

    await page.findByText('Patient');
    await page.findByText(name);
  });

  it('closes the menu when you click outside', async () => {
    const page = await renderWithShell(<LandingPage />);

    userEvents.click(await page.findByLabelText('Open menu'));
    await page.findByText('Home');

    userEvents.click(await page.findByText('Patient'));
    expect(page.queryByText('Home')).toBeNull();
  });
});
