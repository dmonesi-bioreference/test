import type { NextApiRequest, NextApiResponse } from 'next';

import { Errors } from 'client/errors';
import { Services } from 'client/services';
import { permissiveCors } from 'server-utils';
import { server_config } from 'server_config';

export default Errors.wrap(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await permissiveCors(req, res);
  if (!server_config.pimcore.key) {
    return res.status(500).json(Errors.missingConfig('Content api key'));
  }

  const onBoardingCards = await Services.Content.onBoardingCards();

  return res.status(200).json(onBoardingCards);
});
