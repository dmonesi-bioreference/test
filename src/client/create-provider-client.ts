import axios, { AxiosError, AxiosResponse } from 'axios';

import { config } from 'config';

export function createProviderClient(overrides: Partial<Configuration>) {
  const params = { ...config, ...overrides };
  const client = axios.create({
    baseURL: params.services.provider,
    insecureHTTPParser: true,
  });
  const basicAuth = Buffer.from(
    `${params.provider.username}:${params.provider.password}`,
    'binary'
  ).toString('base64');

  client.interceptors.request.use((requestConfig) => {
    requestConfig.headers = {
      ...requestConfig.headers,
      Authorization: `Basic ${basicAuth}`,
      Referer: `${params.provider.referer}`,
      'X-Frame-Options': 'Deny',
    };

    return requestConfig;
  });

  const validateIdentity = async (
    record: Partial<{
      email: string;
      Phone: string;
      zip: string;
      PatientUserId: string;
      dateOfBirth: string;
    }> = {}
  ) => {
    const response = await client
      .post('/v1.0.1/api/PatientPortal/Validate', record)
      .catch((error: AxiosError) => error.response);

    if (response?.status !== 200) {
      throw response?.data;
    }

    return response;
  };

  const allTests = async (id: string) => {
    const response = await client
      .get<{ Data: { Tests: Test[] }[] }>(
        `/v1.0.1/api/PatientPortal/${id}/Tests`
      )
      .catch(
        (error: AxiosError) =>
          error.response as AxiosResponse<{ Data: { Tests: Test[] }[] }>
      );

    if (response?.status !== 200) {
      throw response?.data;
    }

    const [first] = response.data.Data;

    if (first) {
      return first.Tests;
    }

    return [];
  };

  const handlers = {
    Identity: { validate: validateIdentity },
    Tests: { all: allTests },
  };

  return { client, handlers };
}
