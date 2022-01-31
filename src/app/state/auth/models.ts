declare global {
  interface AuthenticatedSession {
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: string;
    email: string;
    email_verified: boolean;
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
    'email',
    'name',
    'nickname',
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
