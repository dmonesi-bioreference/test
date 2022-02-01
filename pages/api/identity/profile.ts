import type { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';

export default Errors.wrap(async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const [result, caregiverProfile] = await Services.Auth.profile(
    request,
    response
  );

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

      const patientProfile = await Services.Patient.profile(guid);

      return response
        .status(200)
        .json({ ...caregiverProfile, ...patientProfile });
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
});
