import type { NextApiRequest, NextApiResponse } from 'next';

import { Client } from 'client';
import { config } from 'config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!config.services.provider) {
    return res
      .status(500)
      .json(Client.Errors.missingConfig('Provider api endpoint'));
  }

  const articles = await Client.Services.Identity.validate(req.body);

  res.status(200).json(articles);
}
