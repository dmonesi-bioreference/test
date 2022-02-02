import { server_config } from 'server_config';

import * as Auth from './auth';
import { createContentClient } from './content';
import { createProviderClient } from './provider';

export function createServiceClients(overrides: Partial<Configuration> = {}) {
  const params = { ...server_config, ...overrides };
  const provider = createProviderClient(params);
  const content = createContentClient(params);

  return {
    Auth,
    Content: content.handlers,
    ...provider.handlers,
  };
}
