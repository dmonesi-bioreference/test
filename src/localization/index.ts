import i18next from 'i18next';

import { resources } from './resources';

if (!i18next.isInitialized) {
  const noOp = () => undefined;

  i18next
    .init({
      lng: 'en',
      debug: process.env.NODE_ENV === 'development',
      resources,
    })
    .then(noOp)
    .catch(noOp);
}

export const t = i18next.t.bind(i18next);

export * from './supported-languages';
