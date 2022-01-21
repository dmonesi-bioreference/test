import { config } from 'config';

import { Api } from './api';
import { createContentClient } from './content';
import { createProviderClient } from './provider';

export function createServiceClients(overrides: Partial<Configuration> = {}) {
  const params = { ...config, ...overrides };
  const provider = createProviderClient(params);
  const content = createContentClient(params);

  return {
    Content: content.handlers,
    ...provider.handlers,
  };
}

export const Client = { Services: createServiceClients(), Api };
