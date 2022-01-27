import { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';
import { config } from 'config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  if (!config.services.provider) {
    return res.status(500).json(Errors.missingConfig('Provider api endpoint'));
  }

  const [firstId] = query.patientPortalUserId;

  if (!firstId) {
    return res.status(400).json(Errors.badRequest('no patient GUID'));
  }

  try {
    const payload = await Services.Tests.all(firstId);

    return res.status(200).json(payload);
  } catch (error) {
    return res.status(500).json(Errors.api(`Failed to load tests - ${error}`));
  }
};
