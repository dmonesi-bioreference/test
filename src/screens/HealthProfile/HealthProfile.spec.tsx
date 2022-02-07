import { screen } from '@testing-library/react';

import { t } from 'localization';
import * as TestUtils from 'test-utils';

import { HealthProfile } from './index';

describe('Rendering', () => {
  const profile: HealthProfile = {
    patient_dob: '11/29/2020',
    patient_nickname: 'Lisa',
    patient_name: 'Lisa Consuela',
    caregiver_name: 'Cromwell Bromwell',
    caregiver_nickname: 'Cromsworth',
    caregiver_dob: new Date(Date.UTC(2012, 1, 14)),
    gender_identity: 'Female',
    gender_genetic: 'Male',
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

  const session: AuthenticatedSession = {
    nickname: 'Barbara',
    name: 'Barbara Jackson',
    email: 'barb.jackson@example.com',
    picture: '',
    updated_at: '',
    email_verified: true,
    sub: 'Is this an ID of some sort?',
  };

  const guid = '1111-2222-3333-4444';

  const assert = {
    button: (name: string) => screen.findByRole('button', { name }),
    heading: (name: string) => screen.findByRole('heading', { name }),
  };

  it('fades content while loading', async () => {
    await TestUtils.renderWithShell(<HealthProfile />, {
      requests: {
        identityProfile: async () => {
          await new Promise((resolve) => setTimeout(resolve, 10_000_000));
          return profile;
        },
      },
      onPatientGuid: async () => ({ guid, source: 'email' }),
      onSession: async () => session,
    });

    const asyncRegion = await screen.findByRole('region', {
      name: 'loaded content',
    });
    expect(asyncRegion.textContent).toContain('Basic Information');
    expect(+asyncRegion.style.opacity).toBeLessThan(1);
  });

  it('executes an identity profile request on load', async () => {
    const listener = jest.fn(async () => profile);
    await TestUtils.renderWithShell(<HealthProfile />, {
      requests: { identityProfile: listener },
      onPatientGuid: async () => ({ guid, source: 'email' }),
      onSession: async () => session,
    });

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('shows patient profile info', async () => {
    await TestUtils.renderWithShell(<HealthProfile />, {
      requests: { identityProfile: async () => profile },
      onPatientGuid: async () => ({ guid, source: 'email' }),
      onSession: async () => session,
    });

    await assert.heading(profile.patient_name);

    await screen.findByText(
      `A detailed overview of ${profile.patient_nickname}'s needs for new providers or caregivers.`
    );

    await screen.findByText(profile.patient_dob);
    await screen.findByText(profile.gender_genetic);
    await screen.findByText(profile.gender_identity);
    await screen.findByText(profile.insurance);
    await screen.findByText(profile.phenotype);
  });

  it('shows caregiver profile info', async () => {
    await TestUtils.renderWithShell(<HealthProfile />, {
      requests: { identityProfile: async () => profile },
      onPatientGuid: async () => ({ guid, source: 'email' }),
      onSession: async () => session,
    });

    await screen.findByText(
      String(t('formatting.date', { value: profile.caregiver_dob }))
    );

    await screen.findByText(profile.caregiver_name);
    await screen.findByText(session.email);
    await screen.findByText(profile.phone_number);
    await screen.findByText(profile.caregiver_location);
    await screen.findByText(profile.relation_to_patient);
  });

  it('renders localized headings', async () => {
    await TestUtils.renderWithShell(<HealthProfile />, {
      requests: { identityProfile: async () => profile },
      onPatientGuid: async () => ({ guid, source: 'email' }),
      onSession: async () => session,
    });

    await assert.heading(t('pages.healthProfile.title'));
    await assert.heading(t('pages.healthProfile.basicInformation.title'));
    await assert.heading(t('pages.healthProfile.primaryIndication.title'));
    await assert.heading(t('pages.healthProfile.yourDetails.title'));
  });
});
