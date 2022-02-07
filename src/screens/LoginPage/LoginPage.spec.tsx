import userEvent from '@testing-library/user-event';

import { act, delay, Mocks, renderWithShell } from 'test-utils';

import { LoginPage } from './index';

describe('Login page', () => {
  it('greets the returning visitor', async () => {
    const app = await renderWithShell(<LoginPage />);

    await app.findByText('Welcome back');
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

    it('has a primary action to log in', async () => {
      const page = await renderWithShell(<LoginPage />);

      await page.findByText('Login');
    });
  });

  describe('states', () => {
    it('uses a persistent session', async () => {
      let isUsingSession = false;
      const onSession = function () {
        isUsingSession = true;
        return Mocks.session.single;
      };

      await renderWithShell(<LoginPage />, {
        onSession: async () => onSession(),
        onAuthenticate: () => Promise.reject('no authentication available'),
      });

      expect(isUsingSession).toBe(true);
    });

    it('authenticates on login', async () => {
      let isAuthenticating = false;
      const onAuthenticate = function () {
        isAuthenticating = true;
        return {};
      };

      const page = await renderWithShell(<LoginPage />, {
        onSession: () => Promise.reject('no session found'),
        onAuthenticate: async () => onAuthenticate(),
      });

      userEvent.type(await page.findByLabelText('Email'), 'person@example.com');
      userEvent.type(
        await page.findByLabelText('Password'),
        'super secret password'
      );

      await act(async () => {
        await delay(300);
      });

      userEvent.click(page.getByRole('button', { name: 'Login' }));

      await act(async () => {
        await delay(300);
      });

      expect(isAuthenticating).toBe(true);
    });
  });
});
