import userEvent from '@testing-library/user-event';

import { useAppEvents } from 'app';
import { act, delay, renderWithShell } from 'test-utils';

import { RegistrationWizard } from './index';

function SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity(
  props: Props<{ date: string }>
) {
  const events = useAppEvents();

  return (
    <button
      onClick={() =>
        events.caregiverRelationshipChange({ field: 'dob', value: props.date })
      }
    >
      Date of birth workaround
    </button>
  );
}

function RegistrationControls(props: Props<unknown>) {
  return (
    <>
      {props.children}
      <section>
        <header>State info</header>
      </section>
      <SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity date="01/01/2021" />
    </>
  );
}

const renderRegistrationWizard = async (ui: any) => {
  const failedAuth = async () => {
    throw new Error('401 Unauthorized');
  };

  const page = await renderWithShell(
    <RegistrationControls>{ui}</RegistrationControls>,
    { onAuthenticate: failedAuth }
  );

  return page;
};

describe('RegistrationWizard', () => {
  it('takes a user through consent, and all of the registration forms', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);

    await page.findByText('Consent to Participate');

    userEvent.click(await page.findByText(/I have read and agree to the/));
    userEvent.click(
      await page.findByText(/I have read and consent to participate/)
    );

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Continue'));

    userEvent.type(await page.findByLabelText('Your First Name'), 'Lisa');
    userEvent.type(await page.findByLabelText('Your Last Name'), 'Jackson');

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

    userEvent.type(await page.findByLabelText('Mobile Number'), '2123456789');
    userEvent.type(
      await page.findByLabelText('Email Address'),
      'lisa@jackson.com'
    );

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));
    userEvent.click(await page.findByText('Date of birth workaround'));

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

    await page.findByText(
      'Lastly, create a strong password to help keep your account and your information safe.'
    );

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

    userEvent.click(await page.findByText('Next'));
    // We extend the timeout for this one because CI takes a little longer
    // than 5s to run this particular acceptance test.
    //
  }, 10_000);
});
