import { config } from 'config';

import * as Auth from './auth';
import { createContentClient } from './content';
import { createProviderClient } from './create-provider-client';

export function createServiceClients(overrides: Partial<Configuration> = {}) {
  const params = { ...config, ...overrides };
  const provider = createProviderClient(params);
  const content = createContentClient(params);

  return {
    Auth,
    Content: content.handlers,
    ...provider.handlers,
  };
}
