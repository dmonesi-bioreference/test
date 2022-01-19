import axios, { AxiosResponse } from "axios";

export * from './helper';

const instance = axios.create({
  baseURL: process.env.PROVIDER_PORTAL_BASE_URL
});

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const Tests = {
  get: (patientPortalUserId: string) => {
    return instance.get<Test[]>(`/api/PatientPortal/${patientPortalUserId}/Tests`).then(responseBody);
  },
}

instance.interceptors.request.use(config => {
  const basicAuth = Buffer.from(
    `${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_USERNAME}:${process.env.PROVIDER_PORTAL_API_BASIC_AUTH_PASSWORD}`,
    'binary'
  ).toString('base64');

  config.headers = {
    'Authorization': `Basic ${basicAuth}`,
    'Referer': `${process.env.PROVIDER_PORTAL_API_REFERER}`
  };

  config.insecureHTTPParser = true;
  
  return config;
});

const ProviderPortal = {
  Tests
}

export default ProviderPortal;