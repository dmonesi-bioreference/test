export const Tests = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  list: async (_context: AppContext = {} as any): Promise<Test[]> => {
    const result = await fetch('/api/tests');

    if (result.ok) {
      return (await result.json()) as Test[];
    } else {
      return Promise.reject({});
    }
  },
};
