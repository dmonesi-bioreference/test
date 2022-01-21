export const Tests = {
  list: async (context: AppContext): Promise<Test[]> => {
    const { patientGuid } = context.auth;

    if (patientGuid === '' && process.env.NODE_ENV !== 'production') return [];

    const result = await fetch(`/api/tests/${patientGuid}`);

    if (result.ok) {
      return (await result.json()) as Test[];
    } else {
      return Promise.reject({});
    }
  },
};
