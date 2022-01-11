import { NextApiRequest, NextApiResponse } from 'next';

import { isTestsJsonPayload_200, isTestsJsonPayload_401 } from 'app/state/tests/models';

async function getData(
  path: RequestInfo,
  init: RequestInit
): Promise<unknown> {
  const response = await fetch(path, init);
  try {
    return await response.json() as Promise<unknown>;
  }
  catch (error) {
    return null;
  }
}

async function getTests(
  url: string,
  headers: Headers,
): Promise<TestsJsonPayload_200 | TestsJsonPayload_401 | null> {
  const res = await getData(url, { method: 'GET', headers });
  if (res && (isTestsJsonPayload_200(res) || isTestsJsonPayload_401(res))) {
    return res;
  }
  return null;
}

export default async (req: NextApiRequest, res: NextApiResponse<Test[] | { message: string }>) => {
  const { method, query } = req;

  if (!process.env.PROVIDER_PORTAL_API_TESTS_URL) return res.status(404).json({ message: 'Url not found' });

  const basicAuth = Buffer.from(
    `${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_USERNAME}:${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_PASSWORD}`,
    'binary'
  ).toString('base64');

  switch(method) {
    case "GET":
      try {
        const payload = await getTests(
          process.env.PROVIDER_PORTAL_API_TESTS_URL.replace('{patientPortalUserId}', query['patientPortalUserId'] as string),
          new Headers({
            'Authorization': `Basic ${basicAuth}`,
            'Referer': `${process.env.PROVIDER_PORTAL_API_REFERER}`,
            'X-Frame-Options': 'Deny',
          })
        );

        if (payload == null) return res.status(400).json({ message: 'Bad request' });

        if (isTestsJsonPayload_401(payload)) {
          return res.status(401).json({ message: payload.Data.ErrorMessage });
        }

        return res.status(200).json(payload.Data[0].Tests);
      }
      catch (err) {
        res.status(500).json({ message: `Failed to load tests ${process.env.NODE_ENV ? '(check your VPN)' : ''}` });
      }
      break;
  }         
}