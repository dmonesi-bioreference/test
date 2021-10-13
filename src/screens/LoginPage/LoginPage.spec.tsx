import { renderWithShell } from 'test-utils';

import { LoginPage } from './index';

describe('Login page', () => {
  it('does not explode', async () => {
    await renderWithShell(<LoginPage />);
  });
  describe('the login page', () => {
    it('has a title', async () => {
      const page = await renderWithShell(<LoginPage />);

      await page.findByText('Welcome', { exact: false });
    });

    it('has username, password inputs', async () => {
      const page = await renderWithShell(<LoginPage />);

      await page.findByText('Username', { exact: false });
      await page.findByText('Password', { exact: false });
    });

    it('has Login', async () => {
      const page = await renderWithShell(<LoginPage />);

      await page.findByText('Login');
    });
  });
});
