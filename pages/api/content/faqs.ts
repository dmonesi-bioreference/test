import type { NextApiRequest, NextApiResponse } from 'next';

import { Client } from 'client';
import { config } from 'config';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (!config.pimcore.key) {
    return res.status(500).json(Client.Errors.missingConfig('Content api key'));
  }

  const faqs = await Client.Services.Content.faqs();

  res.status(200).json(faqs);
}
