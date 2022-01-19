import type { NextApiRequest, NextApiResponse } from 'next';

import { mockArticle } from 'app/state/content/models';
import { transformToArticles } from 'client';
import Pimcore from 'client/pimcore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.PIMCORE_KEY) return res.status(200).json([mockArticle]);
  const result = await Pimcore.Resources.articles();
  res.status(200).json(transformToArticles(result.data));
}
