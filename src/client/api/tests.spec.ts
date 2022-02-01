import { rest } from 'msw';

import { Mocks, server } from 'test-utils';

import { Tests } from './tests';

describe('Tests.list', () => {
  it('calls the local tests api', async () => {
    server.use(
      rest.get('/api/tests', (request, response, context) =>
        response(context.status(200), context.json(Mocks.tests.list))
      )
    );

    const response = await Tests.list();

    expect(response).toEqual(Mocks.tests.list);
  });

  it('returns the tests of the first result if present', async () => {
    server.use(
      rest.get('/api/tests', (request, response, context) =>
        response(context.status(200), context.json(Mocks.tests.list))
      )
    );

    const response = await Tests.list();

    expect(response).toEqual(Mocks.tests.list);
  });

  it('rejects 4xx with response body', async () => {
    const requests = [400, 401, 403] as const;

    for (const status of requests) {
      server.use(
        rest.get('/api/tests', (_request, response, context) =>
          response(context.status(status), context.json({}))
        )
      );

      await expect(Tests.list()).rejects.toEqual({});
    }
  });
});
