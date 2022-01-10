declare global {
  interface AuthenticatedSession {
    nickname: string;
    name: string;
    picture: string;
    updated_at: string;
    email: string;
    email_verified: boolean;
    sub: string;
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

  const sessionProps = [
    'nickname',
    'name',
    'picture',
    'updated_at',
    'email',
    'email_verified',
    'sub',
  ];
  const keys = Object.keys(candidate as object);

  return keys.every((key) => sessionProps.includes(key));
}

export function isPatientInfo(candidate: unknown): candidate is PatientInfo {
  if (!candidate || candidate === null) {
    return false;
  }

  const keys = Object.keys(candidate as object);
  const infoProps = ['guid', 'source'];

  return keys.every((key) => infoProps.includes(key));
}
