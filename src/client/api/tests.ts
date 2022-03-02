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
  report: async (context: TestContext = {} as any): Promise<Blob> => {
    if (!context.test || !context.test.LabAccessionId) return Promise.reject({});

    const reportId = context.test.LabAccessionId;

    const result = await client.get(`/api/tests/report/${reportId}`);

    if (result.ok) {
      return await result.blob();
    } else {
      return Promise.reject({});
    }
  },
}
