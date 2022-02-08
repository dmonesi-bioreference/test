declare global {
  interface RegistrationProfile {
    caregiver_dob: Date;
    caregiver_name: string;
    caregiver_nickname: string;

    patient_guid: string;
    phone_number: string;
    relation_to_patient: string;

    consent_given: ConsentGiven;
    consent_version: string;
    consent_timestamp: string;

    terms_timestamp: string;
    terms_version: string;
    terms_accepted: TermsAccepted;
  }

  type FamilyProfile = RegistrationProfile & PatientProfile;

  interface RequestModelMap {
    identityProfile: FamilyProfile;
  }
}

export const identityProfile: RequestModels['identityProfile'] = {
  key: 'identityProfile',
  init: {
    gender_genetic: '',
    gender_identity: '',
    insurance: '',
    phenotype: '',
    caregiver_name: '',
    caregiver_nickname: '',
    caregiver_location: '',
    consent_given: 'not-given',
    consent_timestamp: '',
    consent_version: '',
    terms_accepted: 'not-accepted',
    terms_timestamp: '',
    terms_version: '',
    phone_number: '',
    patient_name: '',
    patient_nickname: '',
    patient_dob: '',
    caregiver_dob: new Date(),
    relation_to_patient: '',
    patient_guid: '',
  },
};
