import { renderWithShell } from 'test-utils';

import { FurtherRegistration } from './FurtherRegistration';

describe('the further registration page', () => {
  it('does not explode', async () => {
    await renderWithShell(<FurtherRegistration />);
  });

  describe('further registration form', () => {
    it('has a title', async () => {
      const page = await renderWithShell(<FurtherRegistration />);

      await page.findByText('Thank you!');
    });

    it('has first name, last name, email, phone number and password inputs', async () => {
      const page = await renderWithShell(<FurtherRegistration />);

      page.getByRole('textbox', { name: 'Your Email Address' });
      page.getByRole('spinbutton', { name: 'Your Mobile Number' });
      await page.findByText('First Name', { exact: false });
      await page.findByText('Last Name', { exact: false });
      await page.findByText('Confirm Password', { exact: false });
    });

    it('has a CTA to create account', async () => {
      const page = await renderWithShell(<FurtherRegistration />);

      await page.findByText('Set up account');
    });
  });
});
