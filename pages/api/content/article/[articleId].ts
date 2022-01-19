import type { NextApiRequest, NextApiResponse } from 'next';

import { mockArticle } from 'app/state/content/models';
import { transformToArticle } from 'client';
import Pimcore from 'client/pimcore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;

  if (!process.env.PIMCORE_KEY) return res.status(200).json(mockArticle);
  const result = await Pimcore.Resources.article(query['articleId'] as string);
  res.status(200).json(transformToArticle(result.data));
}
