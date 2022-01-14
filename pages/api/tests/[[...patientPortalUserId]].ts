import { NextApiRequest, NextApiResponse } from 'next';

import { isTestsJsonPayload_200, isTestsJsonPayload_401 } from 'app/state/tests/models';

async function getTests(
  url: string,
  headers: Headers,
): Promise<unknown> {
  const response = await fetch(url, { method: 'GET', headers });
  try {
    if (!response.ok) throw response.statusText;
    return await response.json() as Promise<unknown>;
  }
  catch (error) {
    return error as unknown;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse<Test[] | { message: string }>) => {
  const { method, query } = req;

  if (!process.env.PROVIDER_PORTAL_API_TESTS_URL) return res.status(400).json({ message: 'Bad request - Url not found' });

  if (!query['patientPortalUserId']) return res.status(400).json({ message: 'Bad request - missing patient Guid' });

  const basicAuth = Buffer.from(
    `${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_USERNAME}:${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_PASSWORD}`,
    'binary'
  ).toString('base64');

  switch(method) {
    case "GET":
      try {
        const payload = await getTests(
          process.env.PROVIDER_PORTAL_API_TESTS_URL.replace('{patientPortalUserId}', (query['patientPortalUserId'] as string[])[0]),
          new Headers({
            'Authorization': `Basic ${basicAuth}`,
            'Referer': `${process.env.PROVIDER_PORTAL_API_REFERER}`,
            'X-Frame-Options': 'Deny',
          })
        );

        if (typeof payload === 'string' || payload instanceof String) {
          return res.status(500).json({ message: `Internal server error - ${payload}` });
        }

        if (isTestsJsonPayload_401(payload)) {
          return res.status(401).json({ message: payload.Data.ErrorMessage });
        }

        if (isTestsJsonPayload_200(payload)) {
          return res.status(200).json(payload.Data[0].Tests);
        }

        return res.status(400).json({ message: 'Bad request' });
      }
      catch (err) {
        res.status(500).json({ message: `Failed to load tests ${process.env.NODE_ENV ? '(check your VPN)' : ''}` });
      }
      break;
  }         
}