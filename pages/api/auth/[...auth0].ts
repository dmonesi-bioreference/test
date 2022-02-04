import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
  handleProfile,
} from '@auth0/nextjs-auth0';

import { Errors } from 'client/errors';
import { Services } from 'client/services';

type CollectProfileNameResult =
  | ['success', Partial<PatientProfile>]
  | ['not-found', null];

async function collectProfileName(
  guid: string | void,
  getProfile: (Guid: string) => Promise<PatientProfile>
): Promise<CollectProfileNameResult> {
  if (guid) {
    try {
      const profile = await getProfile(guid);

      if (profile) {
        return ['success', profile];
      }
    } catch (error) {
      return ['not-found', null];
    }
  }

  return ['not-found', null];
}

const auth = handleAuth({
  callback: Errors.wrap(handleCallback),
  login: Errors.wrap(async (request, response) => {
    const [result, partialProfile] = await collectProfileName(
      String(request.query.Guid),
      Services.Patient.profile
    );

    const authorizationParams =
      result === 'success' ? { ...request.query, ...partialProfile } : {};

    return handleLogin(request, response, { authorizationParams });
  }),
  logout: Errors.wrap(handleLogout),
  profile: Errors.wrap(handleProfile),
});

export default auth;
