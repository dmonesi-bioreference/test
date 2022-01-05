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

describe('Registration steps', () => {
  it('begins with a first and last name prompt', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);

    await page.findByText('Thank you!');
    await page.findByText('First Name', { exact: false });
    await page.findByText('Last Name', { exact: false });
    await page.findByText('Next');
  });

  it('collects mobile number or email on step two', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);

    userEvent.type(await page.findByLabelText('Your First Name'), 'Lisa');
    userEvent.type(await page.findByLabelText('Your Last Name'), 'Jackson');

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

    await page.findByText(
      'Please let us know how we can notify you of your child’s genetic test results.'
    );

    page.getByRole('textbox', { name: 'Your Email Address' });
    page.getByRole('textbox', { name: 'Your Mobile Number' });

    await page.findByText('Next');
  });

  it('collects relation to patient and dob on step three', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);

    userEvent.type(await page.findByLabelText('Your First Name'), 'Lisa');
    userEvent.type(await page.findByLabelText('Your Last Name'), 'Jackson');

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

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

    userEvent.click(await page.findByText('Next'));

    await page.findByText(
      'Giving us some extra information about you can help us to tailor your experience with us.'
    );
    await page.findByText('Relationship to Patient', { exact: false });
    await page.findByLabelText('Your Date of Birth');
    await page.findByText('Next');
  });

  it('collects password info on the fourth step', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);

    userEvent.type(await page.findByLabelText('Your First Name'), 'Lisa');
    userEvent.type(await page.findByLabelText('Your Last Name'), 'Jackson');

    await act(async () => {
      await delay(300);
    });

    userEvent.click(await page.findByText('Next'));

    userEvent.type(
      await page.findByLabelText('Your Mobile Number'),
      '2123456789'
    );
    userEvent.type(
      await page.findByLabelText('Your Email Address'),
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
      'Lastly, create a strong password to help keep your account and your child’s information safe.'
    );

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

    userEvent.click(await page.findByText('Next'));
  });
});
