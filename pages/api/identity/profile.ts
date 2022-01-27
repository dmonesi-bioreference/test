import type { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const [result, payload] = await Services.Auth.profile(request, response);

  switch (result) {
    case 'success':
      return response.status(200).json(payload);
    case 'no-session':
    case 'no-caregiver':
      return response.status(401).json(Errors.api('Invalid session'));
    case 'not-configured':
      return response
        .status(500)
        .json(Errors.missingConfig('Identity client not configured'));
  }
}
