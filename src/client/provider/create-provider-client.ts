import axios, { AxiosError, AxiosResponse } from 'axios';

import { Errors } from 'client/errors';
import { server_config } from 'server_config';

const NULL_PAYLOAD = Errors.api('Patient service returned null payload.');

export function createProviderClient(overrides: Partial<Configuration>) {
  const params = { ...server_config, ...overrides };
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
      'Content-Type': 'application/json',
      'X-Frame-Options': 'Deny',
    };

    return requestConfig;
  });

  const confirmRegistration = async (
    record: Partial<{
      email: string;
      Phone: string;
      PatientUserId: string;
    }> = {}
  ) =>
    client
      .post('/v1.0.1/api/PatientPortal/UpdateRegistrationStatus', record)
      .catch((error: AxiosError) => error.response);

  const validateIdentity = async (
    record: Partial<{
      email: string;
      Phone: string;
      zip: string;
      PatientUserId: string;
      dateOfBirth: string;
    }> = {}
  ) =>
    await client
      .post('/v1.0.1/api/PatientPortal/Validate', record)
      .catch((error: AxiosError) => error.response);

  const patientProfile = async (id: string) => {
    type TestsResponse = {
      Data: { Patient?: Patient; Insurances: Insurance[]; Tests: Test[] }[];
    };

    const response = await client
      .get<TestsResponse>(`/v1.0.1/api/PatientPortal/${id}/Tests`)
      .catch(
        (error: AxiosError) => error.response as AxiosResponse<TestsResponse>
      );

    if (response?.status !== 200) {
      throw response?.data;
    }

    if (!Array.isArray(response.data.Data)) {
      throw NULL_PAYLOAD;
    }

    const [first] = response.data.Data;

    if (first) {
      const [firstTest] = first.Tests;
      const [firstInsurance] = first.Insurances;
      const patientProfile: PatientProfile = {
        patient_name: [first.Patient?.FirstName, first.Patient?.LastName]
          .filter((name) => name)
          .join(' '),
        patient_nickname: first.Patient?.FirstName || '',
        patient_dob: first.Patient?.BirthDate || '',
        gender_genetic: first.Patient?.Gender || '',
        gender_identity: first.Patient?.GenderIdentification || '',
        insurance: firstInsurance?.Insurance?.Name || '',
        phenotype: firstTest.PhenotypeNames,
        caregiver_location: [first.Patient?.City, first.Patient?.State]
          .filter((location) => location)
          .join(', '),
      };

      return patientProfile;
    } else {
      throw response;
    }
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

    if (!Array.isArray(response.data.Data)) {
      throw NULL_PAYLOAD;
    }

    const [first] = response.data.Data;

    if (first) {
      return first.Tests;
    }

    return [];
  };

  const report = async (userId: string, reportId: string) => {
    const response = await client
      .get<Blob>(`/v1.0.1/api/PatientPortal/Report/${userId}/${reportId}`)
      .catch(
        (error: AxiosError) => error.response as AxiosResponse<Blob>
      );

    if (response?.status !== 200) {
      throw response?.data;
    }
    
    return response;
  }

  const handlers = {
    Identity: {
      validate: validateIdentity,
      confirm: confirmRegistration,
    },
    Patient: { profile: patientProfile },
    Tests: { all: allTests, report },
  };

  return { client, handlers };
}
