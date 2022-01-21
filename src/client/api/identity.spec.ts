import { rest } from 'msw';

import { server } from 'test-utils';

import { Identity } from './identity';

describe('Identity.validate', () => {
  it('calls the local validation api url', async () => {
    const listener = jest.fn();
    const payload = {
      email: 'person@example.com',
      Phone: '123-456-78990',
      zip: '07869',
      PatientUserId: '1111-22222-33333-44444',
      dateOfBirth: '11/09/2021',
    };

    server.use(
      rest.post('/api/identity/validate', (request, response, context) => {
        listener(request.body);
        return response(context.status(200), context.json({}));
      })
    );

    const context = {
      auth: { patientGuid: payload.PatientUserId },
      forms: {
        identity: {
          values: {
            email: payload.email,
            dob: payload.dateOfBirth,
            zip: payload.zip,
            phone: payload.Phone,
          },
        },
      },
    };

    const response = await Identity.validate(context as any);

    expect(listener).toHaveBeenCalledWith(payload);
    expect(response).toEqual({});
  });

  it('rejects 4xx with response body', async () => {
    const payload = {
      email: 'person@example.com',
      Phone: '123-456-78990',
      zip: '07869',
      PatientUserId: '1111-22222-33333-44444',
      dateOfBirth: '11/09/2021',
    };

    const context = {
      auth: { patientGuid: payload.PatientUserId },
      forms: {
        identity: {
          values: {
            email: payload.email,
            dob: payload.dateOfBirth,
            zip: payload.zip,
            phone: payload.Phone,
          },
        },
      },
    };

    const requests = [400, 401, 403] as const;

    for (const status of requests) {
      server.use(
        rest.post('/api/identity/validate', (request, response, context) => {
          return response(context.status(status), context.json({}));
        })
      );

      await expect(Identity.validate(context as any)).rejects.toEqual({});
    }
  });
});
