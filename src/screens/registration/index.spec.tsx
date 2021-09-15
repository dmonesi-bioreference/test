import userEvent from '@testing-library/user-event';

import { useAppEvents } from 'components';
import * as TestUtils from 'test-utils';

import { RegistrationWizard } from './index';

function RegistrationControls(props: Props<unknown>) {
  const events = useAppEvents();

  return (
    <>
      {props.children}
      <section>
        <header>State info</header>
      </section>
      <section>
        <header>Controls</header>
        <section>
          <button onClick={events.register}>Register</button>
          <button onClick={events.confirm}>Confirm</button>
        </section>
      </section>
    </>
  );
}

const renderRegistrationWizard = async (ui: any) => {
  const failedAuth = async () => {
    throw new Error('401 Unauthorized');
  };

  const page = await TestUtils.renderWithShell(
    <RegistrationControls>{ui}</RegistrationControls>,
    { onAuthenticate: failedAuth }
  );

  const travelToWizard = async () => {
    userEvent.click(await page.findByText('Register'));
    userEvent.click(await page.findByText('Confirm'));
  };

  return { ...page, travelToWizard };
};

describe('Registration steps', () => {
  it('begins with a first and last name prompt', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);
    await page.travelToWizard();

    await page.findByText('Thank you!');
    await page.findByText('First Name', { exact: false });
    await page.findByText('Last Name', { exact: false });
    await page.findByText('Next');
  });

  it('collects mobile number or email on step two', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);

    await page.travelToWizard();

    userEvent.click(await page.findByText('Next'));

    await page.findByText(
      'Please let us know how we can notify you of your child’s genetic test results.'
    );

    page.getByRole('textbox', { name: 'Your Email Address' });
    page.getByRole('spinbutton', { name: 'Your Mobile Number' });

    await page.findByText('Next');
  });

  it('collects relation to patient and dob on step three', async () => {
    const page = await renderRegistrationWizard(<RegistrationWizard />);

    await page.travelToWizard();

    userEvent.click(await page.findByText('Next'));
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

    await page.travelToWizard();

    userEvent.click(await page.findByText('Next'));
    userEvent.click(await page.findByText('Next'));
    userEvent.click(await page.findByText('Next'));

    await page.findByText(
      'Lastly, create a strong password to help keep your account and your child’s information safe.'
    );
    page.getByLabelText('Password');
    page.getByLabelText('Confirm Password');

    await page.findByText('Next');
  });
});
