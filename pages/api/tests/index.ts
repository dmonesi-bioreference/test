import { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';
import { config } from 'config';

export default Errors.wrap(
  async (request: NextApiRequest, response: NextApiResponse) => {
    const [result, caregiverProfile] = await Services.Auth.profile(
      request,
      response
    );

    if (!config.services.provider) {
      return response
        .status(500)
        .json(Errors.missingConfig('Provider api endpoint'));
    }

    switch (result) {
      case 'success': {
        const guid = caregiverProfile?.patient_guid || '';

        if (!guid) {
          return response
            .status(403)
            .json(
              Errors.badRequest({ caregiverProfile }, 'No patient guid found.')
            );
        }

        const payload = await Services.Tests.all(guid);

        return response.status(200).json(payload);
      }
      case 'no-session':
      case 'no-caregiver':
        return response
          .status(401)
          .json(Errors.unauthorized({}, 'Invalid session'));
      case 'not-configured':
        return response
          .status(500)
          .json(Errors.missingConfig('Identity client not configured'));
    }
  }
);
