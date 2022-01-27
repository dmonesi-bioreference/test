import type { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';
import { config } from 'config';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (!config.pimcore.key) {
    return res.status(500).json(Errors.missingConfig('Content api key'));
  }

  const articles = await Services.Content.articles();

  res.status(200).json(articles);
}
