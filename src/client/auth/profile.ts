import { getSession } from '@auth0/nextjs-auth0';
import { ManagementClient } from 'auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

import { config } from 'config';

type ProfileItem =
  | 'firstName'
  | 'lastName'
  | 'dateOfBirth'
  | 'mobileNumber'
  | 'relationshipToPatient'
  | 'termsGiven'
  | 'termsTimestamp'
  | 'termsVersion';

declare global {
  type Profile = Record<ProfileItem, string>;
}

type ProfileResult =
  | ['not-configured', null]
  | ['no-session', null]
  | ['no-caregiver', null]
  | ['success', Profile];

export async function profile(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<ProfileResult> {
  if (
    !config.identity.domain ||
    !config.identity.id ||
    !config.identity.secret
  ) {
    return ['not-configured', null];
  }

  const session = getSession(request, response);

  if (!session) {
    return ['no-session', null];
  }

  const client = new ManagementClient({
    domain: config.identity.domain,
    clientId: config.identity.id,
    clientSecret: config.identity.secret,
  });

  const { user_metadata } = await client.getUser({ id: session.user.sub });

  if (!user_metadata) {
    return ['no-caregiver', null];
  }

  return ['success', user_metadata as Profile];
}
