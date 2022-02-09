import { AxiosResponse } from 'axios';
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

  if (!server_config.services.provider) {
    return res.status(500).json(Errors.missingConfig('Provider api endpoint'));
  }

  try {
    const serviceResponse = await Services.Identity.confirm(req.body).catch(
      (error) => error as AxiosResponse
    );

    return res
      .status(serviceResponse?.status || 500)
      .json(serviceResponse?.data);
  } catch (error) {
    return res.status(500).json(Errors.internal(error));
  }
});
