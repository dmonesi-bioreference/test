import userEvents from '@testing-library/user-event';

import { renderWithShell } from 'test-utils';

import Header from './Header';

describe('header', () => {
  it('opens when you click it', async () => {
    const page = await renderWithShell(<Header />);

    userEvents.click(await page.findByLabelText('Open menu'));
    await page.findByText('Home');
  });

  it('closes when you click it again', async () => {
    const page = await renderWithShell(<Header />);

    userEvents.click(await page.findByLabelText('Open menu'));
    await page.findByText('Home');

    userEvents.click(await page.findByLabelText('Open menu'));
    expect(page.queryByText('Home')).toBeNull();
  });

  it('navigates to the Home page when clicked', async () => {
    const page = await renderWithShell(<Header />);

    userEvents.click(await page.findByLabelText('Open menu'));

    expect(location.pathname).toBe('/');
  });
});
