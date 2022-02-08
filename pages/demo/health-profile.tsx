import { Shell } from 'app/components';
import { HealthProfile } from 'screens';

export default function healthProfile() {
  const patientGuidMock = { guid: '1234', source: 'N/A' };

  const session: AuthenticatedSession = {
    name: 'Barbara',
    nickname: 'Hanna Barbara',
    picture: 'none.jpg',
    updated_at: 'now',
    email: 'barb.jackson@example.com',
    email_verified: true,
    sub: 'identity provider ID',
  };

  const profile: FamilyProfile = {
    patient_guid: '1234',
    gender_genetic: 'M',
    gender_identity: 'F',
    phenotype: '?',
    insurance: 'Great',
    consent_version: '0.1',
    consent_given: 'given',
    consent_timestamp: '',
    terms_version: '0.1',
    terms_accepted: 'accepted',
    terms_timestamp: '',
    patient_name: 'Lisa Consuela',
    patient_nickname: 'Lisa',
    patient_dob: '11/29/2020',
    caregiver_name: 'Hanna Barbara',
    caregiver_nickname: 'Barb',
    caregiver_dob: new Date(Date.UTC(1989, 3, 9)),
    caregiver_location: 'Austin, Texas',
    phone_number: '267-190-5214',
    relation_to_patient: 'Parent',
  };

  return (
    <Shell
      requests={{
        identityProfile: async () => {
          await new Promise((resolve) => setTimeout(resolve, 3_000));
          return profile;
        },
      }}
      onPatientGuid={async () => patientGuidMock}
      onSession={async () => session}
    >
      <HealthProfile />
    </Shell>
  );
}
