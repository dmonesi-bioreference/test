import type { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const [result, caregiverProfile] = await Services.Auth.profile(
    request,
    response
  );

  switch (result) {
    case 'success': {
      try {
        const guid = caregiverProfile?.patient_guid || '';

        if (!guid) {
          return response
            .status(403)
            .json(Errors.badRequest('No patient guid found.'));
        }

        const patientProfile = await Services.Patient.profile(guid);

        return response
          .status(200)
          .json({ ...caregiverProfile, ...patientProfile });
      } catch (error: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return response.status(500).json(Errors.api(`${error?.Data}`));
      }
    }
    case 'no-session':
    case 'no-caregiver':
      return response.status(401).json(Errors.api('Invalid session'));
    case 'not-configured':
      return response
        .status(500)
        .json(Errors.missingConfig('Identity client not configured'));
  }
}
