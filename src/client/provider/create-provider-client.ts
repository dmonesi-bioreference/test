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

  const patientProfile = async (id: string) => {
    type TestsResponse = {
      Data: { Patient: Patient; Insurances: Insurance[]; Tests: Test[] }[];
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
        patient_name: `${first.Patient.FirstName} ${first.Patient.LastName}`,
        patient_nickname: first.Patient.FirstName,
        patient_dob: first.Patient.BirthDate,
        gender_genetic: first.Patient.Gender,
        gender_identity: first.Patient.GenderIdentification,
        insurance: firstInsurance.Insurance.Name,
        phenotype: firstTest.PhenotypeNames,
        caregiver_location: `${first.Patient.City}, ${first.Patient.State}`,
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

  const handlers = {
    Identity: { validate: validateIdentity },
    Patient: { profile: patientProfile },
    Tests: { all: allTests },
  };

  return { client, handlers };
}
