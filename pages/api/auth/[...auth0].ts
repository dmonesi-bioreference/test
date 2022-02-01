import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
  handleProfile,
} from '@auth0/nextjs-auth0';

import { Errors } from 'client/errors';

const auth = handleAuth({
  callback: Errors.wrap(handleCallback),
  login: Errors.wrap((request, response) =>
    handleLogin(request, response, { authorizationParams: request.query })
  ),
  logout: Errors.wrap(handleLogout),
  profile: Errors.wrap(handleProfile),
});

export default auth;
