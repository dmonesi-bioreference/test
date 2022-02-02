import type { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';
import { server_config } from 'server_config';

export default Errors.wrap(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!server_config.services.provider) {
    return res.status(500).json(Errors.missingConfig('Provider api endpoint'));
  }

  const articles = await Services.Identity.validate(req.body);

  return res.status(200).json(articles);
});
