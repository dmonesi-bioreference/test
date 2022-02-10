import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';

import { useAppEvents, useAppState } from 'app';
import { act, delay, Mocks, renderWithShell, roles } from 'test-utils';

import { Password } from './Password';

function CheckIdentity() {
  const events = useAppEvents();
  const isVerifyingIdentity = useAppState('auth.verifyingIdentity');

  useEffect(() => {
    if (isVerifyingIdentity) {
      events.checkIdentity();
    }
  }, [isVerifyingIdentity, events]);

  return null;
}

describe('Password step', () => {
  it('does not explode', async () => {
    await renderWithShell(<Password />);
  });

  describe('Password creation validation', () => {
    it('disables next button until form is valid', async () => {
      const page = await renderWithShell(<Password />);

      expect((await page.findByText('Next')).parentElement).toBeDisabled();

      userEvent.type(
        await page.findByLabelText('Password'),
        '1 this is So Secure'
      );
      userEvent.type(
        await page.findByLabelText('Confirm Password'),
        '1 this is So Secure'
      );

      await act(async () => {
        await delay(300);
      });

      expect((await page.findByText('Next')).parentElement).not.toBeDisabled();
    });
  });

  it('displays errors when passwords do not match', async () => {
    const page = await renderWithShell(<Password />);

    expect((await page.findByText('Next')).parentElement).toBeDisabled();

    userEvent.click(await page.findByText('Password'));
    await act(async () => {
      await delay(300);
    });

    userEvent.type(
      await page.findByLabelText('Confirm Password'),
      'thisisadifferentpassword'
    );
    await act(async () => {
      await delay(300);
    });

    await page.findByText('Password is required', { exact: false });
  });

  it('disables the submit button when registering', async () => {
    const password = '1 this is So Secure';
    const page = await roles.auth.emailRegistration(
      <>
        <CheckIdentity />
        <Password />
      </>,
      {
        onIdentity: async () => Mocks.session.single,
        onRegistration: async () => {
          await new Promise((resolve) => setTimeout(resolve, 10_000_000));
          return Promise.reject('Oh noooo');
        },
      }
    );

    userEvent.type(await page.findByLabelText('Password'), password);
    userEvent.type(await page.findByLabelText('Confirm Password'), password);

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));
    expect((await page.findByText('Next')).parentElement).toBeDisabled();
  });

  it('displays a list of error messages when registration fails', async () => {
    const errors = ['Error messages'];
    const password = '1 this is So Secure';
    const page = await roles.auth.emailRegistration(
      <>
        <CheckIdentity />
        <Password />
      </>,
      {
        onIdentity: async () => Mocks.session.single,
        onRegistration: async () => Promise.reject(errors),
      }
    );

    userEvent.type(await page.findByLabelText('Password'), password);
    userEvent.type(await page.findByLabelText('Confirm Password'), password);

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

    await page.findByText('There was a problem registering.');

    for (const error of errors) {
      await page.findByText(error);
    }
  });

  it('displays error descriptions when registration fails', async () => {
    const error = 'Error messages';
    const password = '1 this is So Secure';
    const page = await roles.auth.emailRegistration(
      <>
        <CheckIdentity />
        <Password />
      </>,
      {
        onIdentity: async () => Mocks.session.single,
        onRegistration: async () => Promise.reject({ description: error }),
      }
    );

    userEvent.type(await page.findByLabelText('Password'), password);
    userEvent.type(await page.findByLabelText('Confirm Password'), password);

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

    await page.findByText('There was a problem registering.');
    await page.findByText(error);
  });

  it('displays text errors when registration fails', async () => {
    const error = 'Error messages';
    const password = '1 this is So Secure';
    const page = await roles.auth.emailRegistration(
      <>
        <CheckIdentity />
        <Password />
      </>,
      {
        onIdentity: async () => Mocks.session.single,
        onRegistration: async () => Promise.reject(error),
      }
    );

    userEvent.type(await page.findByLabelText('Password'), password);
    userEvent.type(await page.findByLabelText('Confirm Password'), password);

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

    await page.findByText('There was a problem registering.');
    await page.findByText(error);
  });
});
