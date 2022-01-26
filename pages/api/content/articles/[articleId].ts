import type { NextApiRequest, NextApiResponse } from 'next';

import { Client } from 'client';
import { config } from 'config';

/**
 * This is purely here because we want to call out a Next.js type for being loose.
 * Please remove if the type hardens. This should never be an array, we're not sure
 * why we need to guarantee it manually.
 *
 * @param candidate A next.js query parameter.
 * @returns {boolean} True if the candidate is not an array
 */
function ensureTypeIsStringBecauseNextJsHasLooseRequestTypes(
  candidate: string | string[]
): candidate is string {
  return !Array.isArray(candidate);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.articleId;

  if (!config.pimcore.key) return res.status(404).json({});

  if (ensureTypeIsStringBecauseNextJsHasLooseRequestTypes(id)) {
    const article = await Client.Services.Content.article(id);

    res.status(200).json(article);
  } else {
    return res
      .status(400)
      .json(
        Client.Errors.badRequest('unable to parse article ID, multiple options')
      );
  }
}