import { rest } from 'msw';

import { Mocks, server } from 'test-utils';

import { Tests } from './tests';

describe('Tests.list', () => {
  it('calls the local tests api with the patient guid', async () => {
    const listener = jest.fn();
    const patientGuid = '1111-22222-33333-44444';

    server.use(
      rest.get('/api/tests/:guid', (request, response, context) => {
        listener(request.params.guid);
        return response(context.status(200), context.json(Mocks.tests.list));
      })
    );

    const response = await Tests.list({ auth: { patientGuid } } as any);

    expect(listener).toHaveBeenCalledWith(patientGuid);
    expect(response).toEqual(Mocks.tests.list);
  });

  it('returns the tests of the first result if present', async () => {
    server.use(
      rest.get('/api/tests/:guid', (request, response, context) => {
        return response(context.status(200), context.json(Mocks.tests.list));
      })
    );

    const response = await Tests.list({
      auth: { patientGuid: '1111-2222-3333-4444' },
    } as any);

    expect(response).toEqual(Mocks.tests.list);
  });

  it('rejects 4xx with response body', async () => {
    const context = {
      auth: { patientGuid: '1111-2222-3333-4444' },
    };

    const requests = [400, 401, 403] as const;

    for (const status of requests) {
      server.use(
        rest.get('/api/tests/:guid', (request, response, context) => {
          return response(context.status(status), context.json({}));
        })
      );

      await expect(Tests.list(context as any)).rejects.toEqual({});
    }
  });
});
