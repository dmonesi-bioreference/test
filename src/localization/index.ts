import i18next from 'i18next';

import { resources } from './resources';

const expressDate = (date: Date, format: 'date' | 'datetime' | 'time') => {
  let options = {};
  switch (format) {
    case 'date':
      options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      break;
    case 'datetime':
      options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      };
      break;
    case 'time':
      options = { day: '2-digit', month: '2-digit' };
      break;
  }
  return Intl.DateTimeFormat('en-US', options).format(date).toString();
};

if (!i18next.isInitialized) {
  const noOp = () => undefined;

  i18next
    .init({
      lng: 'en',
      debug: process.env.NODE_ENV === 'development',
      resources,
      interpolation: {
        format: function (value: any): string {
          return value instanceof Date
            ? expressDate(value, 'date')
            : expressDate(new Date(value), 'date');
        },
      },
    })
    .then(noOp)
    .catch(noOp);
}

export const t = i18next.t.bind(i18next);

export * from './supported-languages';
