import { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';
import { server_config } from 'server_config';

export default Errors.wrap(
  async (request: NextApiRequest, response: NextApiResponse) => {
    const { reportId } = request.query;

    const [result, caregiverProfile] = await Services.Auth.profile(
      request,
      response
    );

    if (!server_config.services.provider) {
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

        const payload = await Services.Tests.report(guid, reportId as string);

        response.setHeader('Content-disposition', `attachment; filename="Patient Report.pdf"`);
        response.setHeader('Content-Type', 'application/pdf');

        return response.status(200).send(payload.data);
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
