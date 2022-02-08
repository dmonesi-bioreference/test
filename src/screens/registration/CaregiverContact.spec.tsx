import userEvent from '@testing-library/user-event';

import { act, delay, renderWithShell } from 'test-utils';

import { CaregiverContact } from './CaregiverContact';

describe('Caregiver contact step', () => {
  it('does not explode', async () => {
    await renderWithShell(<CaregiverContact />);
  });

  describe('Caregiver contact form validation', () => {
    it('disables next button until form is valid', async () => {
      const page = await renderWithShell(<CaregiverContact />);

      expect((await page.findByText('Next')).parentElement).toBeDisabled();

      userEvent.type(
        await page.findByLabelText('Your Mobile Number'),
        '212-345-6789'
      );
      userEvent.type(
        await page.findByLabelText('Your Email Address'),
        'lisa@jackson.com'
      );

      await act(async () => {
        await delay(300);
      });

      expect((await page.findByText('Next')).parentElement).not.toBeDisabled();
    });

    it('only displays errors for changed fields', async () => {
      const page = await renderWithShell(<CaregiverContact />);

      expect((await page.findByText('Next')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Your Email Address'));

      await act(async () => {
        await delay(300);
      });

      userEvent.type(
        await page.findByLabelText('Your Mobile Number'),
        '212-345-6789'
      );

      await act(async () => {
        await delay(300);
      });

      await page.findByText('Email Address is required', { exact: false });
      expect(page.queryByText('Mobile Number is required.')).toBeNull();
    });
  });
});
