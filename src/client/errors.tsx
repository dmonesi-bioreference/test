const api = (message: string) => ({ message });

const badRequest = (message: string) => api(`Bad request - ${message}`);
const missingConfig = (value: string) =>
  api(`Expected config value: ${value}, nothing found`);

export const Errors = {
  api,
  badRequest,
  missingConfig,
};
