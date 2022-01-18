import axios, { AxiosRequestHeaders } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

async function getTests(
  url: string,
  headers: AxiosRequestHeaders,
): Promise<unknown> {
  const response = await axios({
    url,
    method: 'get',
    headers,
    insecureHTTPParser: true
  });

  try {
    if (response.status !== 200) throw response;
    return response.data as Promise<unknown>;
  }
  catch (error) {
    return error as unknown;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;

  if (!process.env.PROVIDER_PORTAL_API_TESTS_URL) {
    return res.status(400).json({ message: 'Bad request - Url not found' })
  };

  if (!query['patientPortalUserId']) {
    return res.status(400).json({ message: 'Bad request - missing patient Guid' });
  }

  const basicAuth = Buffer.from(
    `${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_USERNAME}:${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_PASSWORD}`,
    'binary'
  ).toString('base64');

  switch(method) {
    case "GET":
      try {
        const payload = await getTests(
          process.env.PROVIDER_PORTAL_API_TESTS_URL.replace('{patientPortalUserId}', (query['patientPortalUserId'] as string[])[0]),
          {
            'Authorization': `Basic ${basicAuth}`,
            'Referer': `${process.env.PROVIDER_PORTAL_API_REFERER}`,
            'X-Frame-Options': 'Deny',
          }
        );

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