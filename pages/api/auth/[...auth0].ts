import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

const auth = handleAuth({
  login: (request, response) =>
    handleLogin(request, response, { authorizationParams: request.query }),
});

export default auth;
