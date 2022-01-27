declare global {
  interface RequestModelMap {
    caregiverProfile: Profile;
  }
}

export const caregiverProfile: RequestModels['caregiverProfile'] = {
  key: 'caregiverProfile',
  init: {
    termsVersion: '',
    termsGiven: '',
    termsTimestamp: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    relationshipToPatient: '',
    dateOfBirth: '',
  },
};
