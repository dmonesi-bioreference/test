import { client } from './client';

export const Tests = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  list: async (_context: AppContext = {} as any): Promise<Test[]> => {
    const result = await client.get('/api/tests');

    if (result.ok) {
      return (await result.json()) as Test[];
    } else {
      return Promise.reject({});
    }
  },
  report: async (_context: AppContext = {} as any): Promise<Blob> => {
    if (!_context.tests || _context.tests.tests.length == 0) return Promise.reject({});

    const result = await client.get(`/api/tests/report/${_context.tests.tests[0].reportId}`);

    if (result.ok) {
      return await result.blob();
    } else {
      return Promise.reject({});
    }
  },
}
