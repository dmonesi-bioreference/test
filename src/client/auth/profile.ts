import type { NextApiRequest, NextApiResponse } from 'next';

import { server_config } from 'server_config';

import { IdentityService } from './identity-service';

type ProfileResult =
  | ['not-configured', null]
  | ['no-session', null]
  | ['no-caregiver', null]
  | ['success', RegistrationProfile];

export async function profile(
  request: NextApiRequest,
  response: NextApiResponse,
  overrides: { service?: IdentityService } = {}
): Promise<ProfileResult> {
  const service =
    overrides.service ||
    new IdentityService({
      id: server_config.identity.id,
      secret: server_config.identity.secret,
      domain: server_config.identity.domain,
    });

  if (!service.configured) {
    return ['not-configured', null];
  }

  const session = service.session(request, response);

  if (!session) {
    return ['no-session', null];
  }

  const profile = await service.profile(session.user.sub);

  if (!profile) {
    return ['no-caregiver', null];
  }

  return ['success', profile as RegistrationProfile];
}
