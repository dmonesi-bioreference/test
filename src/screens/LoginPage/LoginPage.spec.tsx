import userEvent from '@testing-library/user-event';

import { act, delay, renderWithShell } from 'test-utils';

import { LoginPage } from './index';

describe('Login page', () => {
  it('does not explode', async () => {
    await renderWithShell(<LoginPage />);
  });

  describe('identity form validation', () => {
    it('disables the confirm button until the form is valid', async () => {
      const page = await renderWithShell(<LoginPage />);

      expect((await page.findByText('Login')).parentElement).toBeDisabled();

      userEvent.type(await page.findByLabelText('Email'), 'person@example.com');
      userEvent.type(
        await page.findByLabelText('Password'),
        'super secret password'
      );

      await act(async () => {
        await delay(300);
      });

      expect((await page.findByText('Login')).parentElement).not.toBeDisabled();
    });

    it('only displays errors for changed fields', async () => {
      const page = await renderWithShell(<LoginPage />);

      expect((await page.findByText('Login')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Email'));

      await act(async () => {
        await delay(300);
      });

      expect(page.queryByText('There were some problems.')).toBeNull();
    });
  });

  describe('the login page', () => {
    it('has a title', async () => {
      const page = await renderWithShell(<LoginPage />);

      await page.findByText('Welcome', { exact: false });
    });

    it('has username, password inputs', async () => {
      const page = await renderWithShell(<LoginPage />);

      await page.findByText('Email', { exact: false });
      await page.findByText('Password', { exact: false });
    });

    it('has Login', async () => {
      const page = await renderWithShell(<LoginPage />);

      await page.findByText('Login');
    });
  });
});
