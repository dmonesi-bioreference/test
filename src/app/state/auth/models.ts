declare global {
  interface AuthenticatedSession {
    dob: Date;
    email_verified: boolean;
    terms_timestamp: string;
    terms_version: string;
    terms_given: string;
    email: string;
    location: string;
    name: string;
    nickname: string;
    patient_guid: string;
    phone_number: string;
    picture: string;
    relation_to_patient: string;
    sub: string;
    updated_at: string;
  }

  interface PatientInfo {
    guid: string;
    source: string;
  }
}

export function isAuthenticatedSession(
  candidate: unknown
): candidate is AuthenticatedSession {
  if (!candidate || candidate === null) {
    return false;
  }

  const sessionProps: (keyof AuthenticatedSession)[] = [
    'dob',
    'email',
    'name',
    'nickname',
    'patient_guid',
    'picture',
    'sub',
    'updated_at',
  ];

  const keys = Object.keys(candidate as object);

  return sessionProps.every((sessionProp) => keys.includes(sessionProp));
}

export function isPatientInfo(candidate: unknown): candidate is PatientInfo {
  if (!candidate || candidate === null) {
    return false;
  }

  const keys = Object.keys(candidate as object);
  const infoProps = ['guid', 'source'];

  return keys.every((key) => infoProps.includes(key));
}
