import { screen } from '@testing-library/react';

import { t } from 'localization';
import * as TestUtils from 'test-utils';

import { HealthProfile } from './index';

describe('Rendering', () => {
  const patientGuidMock = {
    guid: '1234',
    source: 'N/A',
  };
  const sessionMock: AuthenticatedSession = {
    nickname: 'Barbara',
    name: 'Barbara Jackson',
    picture: '',
    patient_guid: '1234',
    updated_at: '',
    dob: new Date(Date.UTC(1989, 3, 9)),
    terms_version: '0.1',
    terms_given: 'true',
    terms_timestamp: '',
    location: 'Austin, Texas',
    phone_number: '267-190-5214',
    email: 'barb.jackson@example.com',
    email_verified: true,
    relation_to_patient: 'Parent',
    sub: 'iunno what this is',
  };

  beforeEach(async () => {
    await TestUtils.renderWithShell(<HealthProfile />, {
      onPatientGuid: async () => patientGuidMock,
      onSession: async () => sessionMock,
    });
  });

  it('renders a localised heading', () => {
    const text = t('pages.healthProfile.title');
    expect(screen.getByRole('heading', { name: text }).textContent).toEqual(
      text
    );
  });

  it('renders a localised description', async () => {
    const text = t('pages.healthProfile.description', {
      patientsNickname: 'Lisa',
    });
    expect(screen.getByRole('heading', { name: text }).textContent).toEqual(
      text
    );
  });

  it('renders a localised download button', () => {
    const text = t('pages.healthProfile.actions.download.label');
    expect(screen.getByRole('button', { name: text }).textContent).toEqual(
      text
    );
  });

  it('renders the basic information section', () => {
    const text = t('pages.healthProfile.basicInformation.title');
    expect(screen.getByRole('heading', { name: text }).textContent).toEqual(
      text
    );
  });

  it('renders the primary indication section', () => {
    const text = t('pages.healthProfile.primaryIndication.title');
    expect(screen.getByRole('heading', { name: text }).textContent).toEqual(
      text
    );
  });

  it('renders the your details section', () => {
    const text = t('pages.healthProfile.yourDetails.title');
    expect(screen.getByRole('heading', { name: text }).textContent).toEqual(
      text
    );
  });
});
