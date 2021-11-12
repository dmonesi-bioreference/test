import userEvent from '@testing-library/user-event';

import { act, delay, renderWithShell } from 'test-utils';

import { StepOne } from './StepOne';

describe('Step one page', () => {
  it('does not explode', async () => {
    await renderWithShell(<StepOne />);
  });

  describe('Caregiver name form validation', () => {
    it('disables next button until form is valid', async () => {
      const page = await renderWithShell(<StepOne />);

      expect((await page.findByText('Next')).parentElement).toBeDisabled();

      userEvent.type(await page.findByLabelText('Your First Name'), 'Lisa');
      userEvent.type(await page.findByLabelText('Your Last Name'), 'Jackson');

      await act(async () => {
        await delay(300);
      });

      expect((await page.findByText('Next')).parentElement).not.toBeDisabled();
    });

    it('only displays errors for changed fields', async () => {
      const page = await renderWithShell(<StepOne />);

      expect((await page.findByText('Next')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Your First Name'));

      await act(async () => {
        await delay(300);
      });

      userEvent.type(await page.findByLabelText('Your Last Name'), 'Jackson');

      await act(async () => {
        await delay(300);
      });

      await page.findByText('First Name is required', { exact: false });
      expect(page.queryByText('Last Name is required.')).toBeNull();
    });
  });
});
