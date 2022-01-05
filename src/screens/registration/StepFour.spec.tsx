import userEvent from '@testing-library/user-event';

import { act, delay, renderWithShell } from 'test-utils';

import { StepFour } from './StepFour';

describe('Step four page', () => {
  it('does not explode', async () => {
    await renderWithShell(<StepFour />);
  });

  describe('Password creation validation', () => {
    it('disables next button until form is valid', async () => {
      const page = await renderWithShell(
        <>
          <StepFour />
        </>
      );

      expect((await page.findByText('Next')).parentElement).toBeDisabled();

      userEvent.type(
        await page.findByLabelText('Password'),
        '1 this is So Secure'
      );
      userEvent.type(
        await page.findByLabelText('Confirm Password'),
        '1 this is So Secure'
      );
      userEvent.click(await page.findByText('I agree to the'));

      await act(async () => {
        await delay(300);
      });

      expect((await page.findByText('Next')).parentElement).not.toBeDisabled();
    });
  });

  it('displays errors when passwords do not match', async () => {
    const page = await renderWithShell(<StepFour />);

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
});
