import { assign } from '@xstate/immer';

import {
  isArticleFailurePayload,
  isArticlePayload,
} from './content/models/content-failure';

declare global {
  interface AppEventMap {
    fetchAllArticles: {
      type: 'fetchAllArticles';
    };
  }
}

export const actions = {
  articlesUpdate: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isArticlePayload(data)) {
      context.content.articles.data = data;
    }
  }),
  articlesError: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isArticleFailurePayload(data)) {
      context.content.articles.errors = data;
    }
  }),
};

export const machine = {
  type: 'parallel',
  states: {
    articles: {
      initial: 'idle',
      states: {
        idle: { on: { fetchAllArticles: 'requesting' } },
        requesting: {
          invoke: {
            src: 'handleFetchAllArticles',
            onDone: {
              target: 'success',
              actions: 'articlesUpdate',
            },
            onError: {
              target: 'failure',
              actions: 'articlesError',
            },
          },
        },
        success: {},
        failure: { on: { fetchAllArticles: 'requesting' } },
      },
    },
  },
};

export {};
