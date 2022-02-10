import { rest } from 'msw';

import { server } from 'test-utils';

import { Identity } from './identity';

describe('Identity.profile', () => {
  it('calls the local profile api url', async () => {
    const listener = jest.fn();

    const profile = {
      termsVersion: '0.1',
      termsGiven: 'true',
      termsTimestamp: '2021-12-14T23:22:50.830Z',
      firstName: 'Person',
      lastName: 'Example',
      mobileNumber: '2123459999',
      relationshipToPatient: 'Parent',
      dateOfBirth: '2021-12-01',
    };

    server.use(
      rest.get('/api/identity/profile', (request, response, context) => {
        listener();
        return response(context.status(200), context.json(profile));
      })
    );

    const response = await Identity.profile();

    expect(listener).toHaveBeenCalled();
    expect(response).toEqual(profile);
  });

  it('rejects 4xx with response body', async () => {
    const requests = [400, 401, 403] as const;

    for (const status of requests) {
      server.use(
        rest.get('/api/identity/profile', (request, response, context) => {
          return response(context.status(status), context.json({}));
        })
      );

      await expect(Identity.profile()).rejects.toEqual({});
    }
  });
});

describe('Identity.confirm', () => {
  it('calls the local confirmation api url', async () => {
    const listener = jest.fn();
    const payload = {
      email: 'person@example.com',
      Phone: '123-456-7890',
      PatientPortalUserId: '1111-22222-33333-44444',
    };

    server.use(
      rest.post('/api/identity/confirm', (request, response, context) => {
        listener(request.body);
        return response(context.status(200), context.json({}));
      })
    );

    const context = {
      auth: { patientGuid: payload.PatientPortalUserId },
      forms: {
        identity: {
          values: {
            email: payload.email,
            phone: payload.Phone,
          },
        },
      },
    };

    const response = await Identity.confirm(context as any);

    expect(listener).toHaveBeenCalledWith({ ...payload, Phone: '1234567890' });
    expect(response).toEqual({});
  });
});

describe('Identity.validate', () => {
  it('calls the local validation api url', async () => {
    const listener = jest.fn();
    const payload = {
      email: 'person@example.com',
      Phone: '123-456-7890',
      zip: '07869',
      PatientPortalUserId: '1111-22222-33333-44444',
      dateOfBirth: '02/02/2022',
    };

    server.use(
      rest.post('/api/identity/validate', (request, response, context) => {
        listener(request.body);
        return response(context.status(200), context.json({}));
      })
    );

    const context = {
      auth: { patientGuid: payload.PatientPortalUserId },
      forms: {
        identity: {
          values: {
            email: payload.email,
            dob: '2022-02-02',
            zip: payload.zip,
            phone: payload.Phone,
          },
        },
      },
    };

    const response = await Identity.validate(context as any);

    expect(listener).toHaveBeenCalledWith({ ...payload, Phone: '1234567890' });
    expect(response).toEqual({});
  });
});
