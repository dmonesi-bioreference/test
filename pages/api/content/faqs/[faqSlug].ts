import type { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';
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
  const slug = req.query.faqSlug;

  if (!config.pimcore.key) return res.status(404).json({});

  if (ensureTypeIsStringBecauseNextJsHasLooseRequestTypes(slug)) {
    const faq = await Services.Content.faq(slug);

    res.status(200).json(faq);
  } else {
    return res
      .status(400)
      .json(Errors.badRequest('unable to parse faq slug, multiple options'));
  }
}
