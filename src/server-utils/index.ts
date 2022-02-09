import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// import { server_config } from 'server_config';

type Middleware = (
  request: NextApiRequest,
  response: NextApiResponse,
  handler: (errorOrResult: unknown) => unknown
) => void;

// Turns Connect middleware into something we can await in our
// API handlers.
//
function asyncMiddlewareWrapper(middleware: Middleware) {
  return (request: NextApiRequest, response: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(request, response, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export const permissiveCors = asyncMiddlewareWrapper(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: true,
  })
);
