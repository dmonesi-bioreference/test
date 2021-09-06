import { renderWithShell } from 'test-utils';

import { AuthenticationForm } from './AuthenticationForm';

describe('The authentication form page', () => {
  it('does not explode', async () => {
    await renderWithShell(<AuthenticationForm />);
  });

  describe('authentication form', () => {
    it('has a title', async () => {
      const page = await renderWithShell(<AuthenticationForm />);

      await page.findByText('Welcome', { exact: false });
    });

    it('has date of birth, zipcode and email inputs', async () => {
      const page = await renderWithShell(<AuthenticationForm />);

      await page.findByText('Date of Birth', { exact: false });
      await page.findByText('Zip Code', { exact: false });
      await page.findByText('Email', { exact: false });
    });

    it('has a CTA to submit form', async () => {
      const page = await renderWithShell(<AuthenticationForm />);

      await page.findByText('Confirm');
    });
  });
});
