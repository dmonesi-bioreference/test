import { DefaultRequestBody, RequestParams, rest, RestRequest } from 'msw';

import { Mocks, server } from 'test-utils';

import { createProviderClient } from './create-provider-client';

const config = {
  provider: {
    referer: 'given-referer',
    username: 'username',
    password: 'password',
  },
};

const { client, handlers } = createProviderClient(config);

describe('Client', () => {
  it('adds headers to all http requests', async () => {
    let givenRequest = {} as RestRequest<DefaultRequestBody, RequestParams>;

    server.use(
      rest.get('/anything', (request, response, context) => {
        givenRequest = request;
        return response(context.status(200), context.json({}));
      })
    );

    await client.get('/anything');

    expect(givenRequest.headers.get('X-Frame-Options')).toEqual('Deny');
    expect(givenRequest.headers.get('referer')).toEqual('given-referer');

    expect(givenRequest.headers.get('Authorization')).toEqual(
      `Basic ${Buffer.from('username:password', 'binary').toString('base64')}`
    );
  });
});

describe('Handlers', () => {
  it('Identity.confirm calls the update registration url', async () => {
    const listener = jest.fn();
    const payload = {
      email: 'person@example.com',
      Phone: '123-456-78990',
      PatientUserId: '1111-22222-33333-44444',
    };

    const success = {
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.post(
        'http://localhost/v1.0.1/api/PatientPortal/UpdateRegistrationStatus',
        (request, response, context) => {
          listener(request.body);
          return response(context.status(200), context.json(success));
        }
      )
    );

    const response = await handlers.Identity.confirm(payload);

    expect(listener).toHaveBeenCalledWith(payload);
    expect(response?.data).toEqual(success);
  });

  it('Identity.validate calls the validation url', async () => {
    const listener = jest.fn();
    const payload = {
      email: 'person@example.com',
      Phone: '123-456-78990',
      zip: '07869',
      PatientUserId: '1111-22222-33333-44444',
      dateOfBirth: '11/09/2021',
    };

    const success = {
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.post(
        'http://localhost/v1.0.1/api/PatientPortal/Validate',
        (request, response, context) => {
          listener(request.body);
          return response(context.status(200), context.json(success));
        }
      )
    );

    const response = await handlers.Identity.validate(payload);

    expect(listener).toHaveBeenCalledWith(payload);
    expect(response?.data).toEqual(success);
  });

  it('Patient.profile gracefully fails on incomplete information', async () => {
    const id = '1234';
    const listener = jest.fn();

    const success = {
      Data: [
        {
          Insurances: [],
          Patient: {},
          Tests: Mocks.tests.list,
        },
      ],
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.get(
        'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
        (request, response, context) => {
          listener(request.params.id);
          return response(context.status(200), context.json(success));
        }
      )
    );

    const response = await handlers.Patient.profile(id);

    expect(listener).toHaveBeenCalledWith(id);
    expect(response).toEqual({
      gender_genetic: '',
      gender_identity: '',
      insurance: '',
      phenotype: Mocks.tests.single.PhenotypeNames,
      patient_dob: '',
      patient_name: '',
      patient_nickname: '',
      caregiver_location: '',
    });
  });

  it('Patient.profile returns the profile data for the given id', async () => {
    const id = '1234';
    const listener = jest.fn();

    const success = {
      Data: [
        {
          Insurances: Mocks.insurance.list,
          Patient: Mocks.patient.single,
          Tests: Mocks.tests.list,
        },
      ],
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.get(
        'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
        (request, response, context) => {
          listener(request.params.id);
          return response(context.status(200), context.json(success));
        }
      )
    );

    const response = await handlers.Patient.profile(id);

    expect(listener).toHaveBeenCalledWith(id);
    expect(response).toEqual({
      gender_genetic: Mocks.patient.single.Gender,
      gender_identity: Mocks.patient.single.GenderIdentification,
      insurance: Mocks.insurance.single.Insurance.Name,
      phenotype: Mocks.tests.single.PhenotypeNames,
      patient_dob: Mocks.patient.single.BirthDate,
      patient_name: `${Mocks.patient.single.FirstName} ${Mocks.patient.single.LastName}`,
      patient_nickname: Mocks.patient.single.FirstName,
      caregiver_location: `${Mocks.patient.single.City}, ${Mocks.patient.single.State}`,
    });
  });

  it('Patient.profile returns an informative 500 exception on bad data', async () => {
    const success = {
      Data: null,
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.get(
        'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
        (request, response, context) => {
          return response(context.status(200), context.json(success));
        }
      )
    );

    await expect(handlers.Patient.profile('1234')).rejects.toEqual({
      message: 'Patient service returned null payload.',
    });
  });

  it('Patient.profile rejects 4xx with response body', async () => {
    const badRequest = {
      Data: {
        IsAuthorized: false,
        Code: '12345',
        ErrorMessage: 'Bad Request',
      },
      IsSuccess: false,
      ValidationResult: null,
    };

    const unauthorized = {
      Data: {
        IsAuthorized: false,
        Code: 'A0004',
        ErrorMessage: "Basic authentication failed: request isn't authorized.",
      },
      IsSuccess: false,
      ValidationResult: null,
    };

    const forbidden = {
      Data: {
        IsAuthorized: false,
        Code: '12345',
        ErrorMessage: 'Patient Portal User identification failed',
      },
      IsSuccess: false,
      ValidationResult: null,
    };

    const requests = [
      [400, badRequest],
      [401, unauthorized],
      [403, forbidden],
    ] as const;

    for (const [status, payload] of requests) {
      server.use(
        rest.get(
          'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
          (request, response, context) => {
            return response(context.status(status), context.json(payload));
          }
        )
      );

      await expect(handlers.Patient.profile('1234')).rejects.toEqual(payload);
    }
  });

  it('Tests.all returns the test data for the given id', async () => {
    const id = '1234';
    const listener = jest.fn();

    const success = {
      Data: [{ Tests: Mocks.tests.list }],
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.get(
        'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
        (request, response, context) => {
          listener(request.params.id);
          return response(context.status(200), context.json(success));
        }
      )
    );

    const response = await handlers.Tests.all(id);

    expect(listener).toHaveBeenCalledWith(id);
    expect(response).toEqual(Mocks.tests.list);
  });

  it('Tests.all returns an empty list for no data', async () => {
    const success = {
      Data: [],
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.get(
        'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
        (request, response, context) => {
          return response(context.status(200), context.json(success));
        }
      )
    );

    const response = await handlers.Tests.all('1234');

    expect(response).toEqual([]);
  });

  it('Tests.all an informative 500 exception on bad data', async () => {
    const success = {
      Data: null,
      IsSuccess: true,
      ValidationResult: {
        IsValid: true,
        Errors: null,
      },
    };

    server.use(
      rest.get(
        'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
        (request, response, context) => {
          return response(context.status(200), context.json(success));
        }
      )
    );

    await expect(handlers.Tests.all('1234')).rejects.toEqual({
      message: 'Patient service returned null payload.',
    });
  });

  it('Tests.all rejects 4xx with response body', async () => {
    const badRequest = {
      Data: {
        IsAuthorized: false,
        Code: '12345',
        ErrorMessage: 'Bad Request',
      },
      IsSuccess: false,
      ValidationResult: null,
    };

    const unauthorized = {
      Data: {
        IsAuthorized: false,
        Code: 'A0004',
        ErrorMessage: "Basic authentication failed: request isn't authorized.",
      },
      IsSuccess: false,
      ValidationResult: null,
    };

    const forbidden = {
      Data: {
        IsAuthorized: false,
        Code: '12345',
        ErrorMessage: 'Patient Portal User identification failed',
      },
      IsSuccess: false,
      ValidationResult: null,
    };

    const requests = [
      [400, badRequest],
      [401, unauthorized],
      [403, forbidden],
    ] as const;

    for (const [status, payload] of requests) {
      server.use(
        rest.get(
          'http://localhost/v1.0.1/api/PatientPortal/:id/Tests',
          (request, response, context) => {
            return response(context.status(status), context.json(payload));
          }
        )
      );

      await expect(handlers.Tests.all('1234')).rejects.toEqual(payload);
    }
  });

  it('Tests.report returns the PDF for the given patient portal user id and report id', async () => {
    const patientPortalUserId = '1234';
    const reportId = '1234';

    const listener = jest.fn();
    const pdfBuffer = await Mocks.report.get();

    server.use(
      rest.get(
        'http://localhost/v1.0.1/api/PatientPortal/Report/:patientPortalUserId/:reportId',
        (request, response, context) => {
          listener(request.params.patientPortalUserId, request.params.reportId);
          return response(
            context.set('Content-Length', pdfBuffer.byteLength.toString()),
            context.set('Content-Type', 'application/pdf'),
            context.body(pdfBuffer),
          );
        }
      )
    );

    const response = await handlers.Tests.report(patientPortalUserId, reportId);

    expect(listener).toHaveBeenCalledWith(patientPortalUserId, reportId);
    expect(response?.data).toEqual(pdfBuffer);
  });

  it('Tests.report returns returns 4xx with response body', async () => {
    const reportNotFoundRequest = {
      Data: {
        IsAuthorized: false,
        Code: '1031',
        ErrorMessage: 'Report information cannot be found',
      },
      IsSuccess: false,
      ValidationResult: null,
    }

    const unauthorizedReportAccess = {
      Data: {
        IsAuthorized: false,
        Code: '4033',
        ErrorMessage: 'The patient can only view their own reports',
      },
      IsSuccess: false,
      ValidationResult: null,
    }

    const requests = [
      [401, reportNotFoundRequest],
      [401, unauthorizedReportAccess],
    ] as const;

    for (const [status, payload] of requests) {
      server.use(
        rest.get(
          'http://localhost/v1.0.1/api/PatientPortal/Report/:patientPortalUserId/:reportId',
          (_, response, context) => {
            return response(context.status(status), context.json(payload));
          }
        )
      );

      await expect(handlers.Tests.report('1234', '1234')).rejects.toEqual(payload);
    }
  });
});
