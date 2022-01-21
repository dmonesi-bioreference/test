import i18next from 'i18next';

import { resources } from './resources';

if (!i18next.isInitialized) {
  const noOp = () => undefined;

  i18next
    .init({
      lng: 'en',
      debug: process.env.NODE_ENV === 'development',
      resources,
      interpolation: {
        format: function(value: any, format?: string): string {
          if (value instanceof Date) {
            const options = {}
            switch (format) {
              case 'date': {
                options['day'] = '2-digit';
                options['month'] = '2-digit';
                options['year'] = 'numeric';
              } break;
              case 'datetime': {
                options['day'] = '2-digit';
                options['month'] = '2-digit';
                options['year'] = 'numeric';
                options['hour'] = '2-digit';
                options['minute'] = '2-digit';
              } break;
              case 'time': {
                options['hour'] = '2-digit';
                options['minute'] = '2-digit';
              } break;
            }
            return Intl.DateTimeFormat('en-US', options).format(value).toString();
          }
          return `${value}`;
        }
      }
    })
    .then(noOp)
    .catch(noOp);
}

export const t = i18next.t.bind(i18next);

export * from './supported-languages';
