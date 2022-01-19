import type { NextApiRequest, NextApiResponse } from 'next';

import { mockFAQs } from 'app/state/content/models';
import { transformToFAQs } from 'client';
import Pimcore from 'client/pimcore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.PIMCORE_KEY) return res.status(200).json(mockFAQs);
  const result = await Pimcore.Resources.faqs();
  res.status(200).json(transformToFAQs(result.data));
}
