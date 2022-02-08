import userEvent from '@testing-library/user-event';

import { useAppEvents } from 'app';
import { act, delay, renderWithShell, roles } from 'test-utils';

import { IdentityForm } from './IdentityForm';

const profile: FamilyProfile = {
  patient_dob: '11/29/2020',
  patient_nickname: 'Lava Girl',
  patient_name: 'High Princess Lava Girl',
  caregiver_name: 'Cromwell Bromwell',
  caregiver_nickname: 'Cromsworth',
  caregiver_dob: new Date(Date.UTC(2012, 1, 14)),
  gender_identity: 'Female',
  gender_genetic: 'Female',
  insurance: 'Kaiser',
  phenotype: 'Phenotype information here',
  caregiver_location: 'Austin, Texas',
  terms_version: '0.1',
  terms_given: 'true',
  terms_timestamp: '',
  patient_guid: '1234',
  phone_number: '267-190-5214',
  relation_to_patient: 'Parent',
};

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

  it('displays the email identity page for email registrants', async () => {
    const page = await roles.auth.emailRegistration(<IdentityForm />);

    await page.findByText('Your Email Address');
  });

  it('displays the mobile number identity page for sms registrants', async () => {
    const page = await roles.auth.smsRegistration(<IdentityForm />);

    await page.findByText('Your Mobile Phone');
  });

  it('fades content while loading', async () => {
    const page = await renderWithShell(<IdentityForm />, {
      requests: {
        identityProfile: async () => {
          await new Promise((resolve) => setTimeout(resolve, 10_000_000));
          return profile;
        },
      },
    });

    const asyncRegion = await page.findByRole('region', {
      name: 'loaded content',
    });
    expect(asyncRegion.textContent).toContain('To make sure we keep your');
    expect(+asyncRegion.style.opacity).toBeLessThan(1);
  });

  it('executes an identity profile request on load', async () => {
    const listener = jest.fn(async () => profile);
    await renderWithShell(<IdentityForm />, {
      requests: { identityProfile: listener },
    });

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('shows patient profile info', async () => {
    const page = await renderWithShell(<IdentityForm />, {
      requests: { identityProfile: async () => profile },
    });

    await page.findByText(`Welcome, ${profile.patient_nickname}`);
    await page.findByText(`${profile.patient_nickname}'s Date of Birth`);
    await page.findByText(`${profile.patient_nickname}'s Zip Code`);
  });

  describe('identity form validation', () => {
    it('disables the confirm button until the form is valid', async () => {
      const page = await renderWithShell(
        <>
          <IdentityForm />
          <SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity date="10/22/2021" />
        </>,
        { requests: { identityProfile: async () => profile } }
      );

      expect((await page.findByText('Confirm')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));
      userEvent.type(
        await page.findByLabelText(`${profile.patient_nickname}'s Zip Code`),
        '90210'
      );

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
          requests: { identityProfile: async () => profile },
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
          onPatientGuid: async () => ({ guid: '1234', source: '' }),
          onIdentity: listener,
          requests: { identityProfile: async () => profile },
          onSession: () => Promise.reject('no session found'),
        }
      );

      expect((await page.findByText('Confirm')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));
      userEvent.type(
        await page.findByLabelText(`${profile.patient_nickname}'s Zip Code`),
        zip
      );
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
          onPatientGuid: async () => ({ guid: '1234', source: '' }),
          onIdentity: listener,
          requests: { identityProfile: async () => profile },
          onSession: () => Promise.reject('no session found'),
        }
      );

      expect((await page.findByText('Confirm')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));
      userEvent.type(
        await page.findByLabelText(`${profile.patient_nickname}'s Zip Code`),
        zip
      );
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
              values: { dob, email, zip, phone: '' },
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
      const page = await renderWithShell(<IdentityForm />, {
        requests: { identityProfile: async () => profile },
      });

      await page.findByText(`Welcome, ${profile.patient_nickname}`, {
        exact: false,
      });
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
