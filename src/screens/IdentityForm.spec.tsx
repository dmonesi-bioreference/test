import userEvent from '@testing-library/user-event';

import { useAppEvents } from 'components';
import { act, delay, renderWithShell } from 'test-utils';

import { IdentityForm } from './IdentityForm';

function SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity(
  props: Props<{ date: string }>
) {
  const events = useAppEvents();

  return (
    <button
      onClick={() => events.identityChange({ field: 'dob', value: props.date })}
    >
      Date of birth workaround
    </button>
  );
}
describe('The identity form page', () => {
  it('does not explode', async () => {
    await renderWithShell(<IdentityForm />);
  });

  describe('identity form validation', () => {
    it('disables the confirm button until the form is valid', async () => {
      const page = await renderWithShell(
        <>
          <IdentityForm />
          <SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity date="10/22/2021" />
        </>
      );

      expect((await page.findByText('Confirm')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));
      userEvent.type(await page.findByLabelText("Lisa's Zip Code"), '90210');

      userEvent.type(
        await page.findByLabelText('Your Email Address'),
        'person@example.com'
      );

      await act(async () => {
        await delay(300);
      });

      expect(
        (await page.findByText('Confirm')).parentElement
      ).not.toBeDisabled();
    });

    it('only displays errors for changed fields', async () => {
      const dob = '10/22/2021';

      const listener = jest.fn(async () => undefined);
      const page = await renderWithShell(
        <>
          <IdentityForm />
          <SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity
            date={dob}
          />
        </>,
        {
          onIdentity: listener,
          onSession: () => Promise.reject('no session found'),
        }
      );

      expect((await page.findByText('Confirm')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));

      await act(async () => {
        await delay(300);
      });

      expect(page.queryByText('There were some problems.')).toBeNull();
    });

    it('prevents more than 5 identity check attempts', async () => {
      const dob = '10/22/2021';
      const zip = '90210';
      const email = 'person@example.com';

      const listener = jest.fn(() => Promise.reject('Not verified'));
      const page = await renderWithShell(
        <>
          <IdentityForm />
          <SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity
            date={dob}
          />
        </>,
        {
          onIdentity: listener,
          onSession: () => Promise.reject('no session found'),
        }
      );

      expect((await page.findByText('Confirm')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));
      userEvent.type(await page.findByLabelText("Lisa's Zip Code"), zip);
      userEvent.type(await page.findByLabelText('Your Email Address'), email);

      await act(async () => {
        await delay(300);
      });

      userEvent.click(await page.findByText('Confirm'));

      await page.findByText('4');
    });

    it('calls onIdentity', async () => {
      const dob = '10/22/2021';
      const zip = '90210';
      const email = 'person@example.com';

      const listener = jest.fn(async () => undefined);
      const page = await renderWithShell(
        <>
          <IdentityForm />
          <SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity
            date={dob}
          />
        </>,
        {
          onIdentity: listener,
          onSession: () => Promise.reject('no session found'),
        }
      );

      expect((await page.findByText('Confirm')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));
      userEvent.type(await page.findByLabelText("Lisa's Zip Code"), zip);
      userEvent.type(await page.findByLabelText('Your Email Address'), email);

      await act(async () => {
        await delay(300);
      });

      userEvent.click(await page.findByText('Confirm'));

      await act(async () => {
        await delay(300);
      });

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({
          forms: expect.objectContaining({
            identity: expect.objectContaining({
              values: { dob, email, zip },
            }),
          }),
        }),
        expect.anything(),
        expect.anything()
      );
    });
  });

  describe('identity form copy', () => {
    it('has a title', async () => {
      const page = await renderWithShell(<IdentityForm />);

      await page.findByText('Welcome', { exact: false });
    });

    it('has date of birth, zipcode and email inputs', async () => {
      const page = await renderWithShell(<IdentityForm />);

      await page.findByText('Date of Birth', { exact: false });
      await page.findByText('Zip Code', { exact: false });
      await page.findByText('Email', { exact: false });
    });

    it('has a CTA to submit form', async () => {
      const page = await renderWithShell(<IdentityForm />);

      await page.findByText('Confirm');
    });
  });
});
