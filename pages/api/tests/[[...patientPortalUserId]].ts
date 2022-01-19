import { NextApiRequest, NextApiResponse } from 'next';

import ProviderPortal from 'client/provider-portal';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;

  if (!process.env.PROVIDER_PORTAL_BASE_URL) {
    return res.status(400).json({ message: 'Bad request - Url not found' })
  };

  if (!query['patientPortalUserId']) {
    return res.status(400).json({ message: 'Bad request - missing patient Guid' });
  }

  switch(method) {
    case "GET":
      try {
        const payload = await ProviderPortal.Tests.get((query['patientPortalUserId'] as string[])[0]);

        if (payload instanceof Response) {
          return res.status(400).json({
            ...payload,
            headers: payload.headers,
            ok: payload.ok,
            status: payload.status,
            statusText: payload.statusText,
            type: payload.type,
            url: payload.url
          });
        }

        return res.status(200).json(payload);
      }
      catch (error) {
        res.status(500).json({ message: `Failed to load tests - ${error}` });
      }
  }         
}