import { assign } from '@xstate/immer';

import {
  isArticlePayload,
  isContentFailurePayload,
  isFAQPayload,
} from './models';

declare global {
  interface AppEventMap {
    fetchAllArticles: {
      type: 'fetchAllArticles';
    };
    fetchAllFAQs: {
      type: 'fetchAllFAQs';
    };
  }
}

export const context = {
  articles: { data: [] as Article[], errors: [] as ContentFailure[] },
  FAQs: { data: [] as FAQ[], errors: [] as ContentFailure[] },
};

export const actions = {
  articlesUpdate: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isArticlePayload(data)) {
      context.content.articles.data = data;
    }
  }),
  articlesError: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isContentFailurePayload(data)) {
      context.content.articles.errors = data;
    }
  }),
  FAQsUpdate: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isFAQPayload(data)) {
      context.content.FAQs.data = data;
    }
  }),
  FAQsError: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isContentFailurePayload(data)) {
      context.content.FAQs.errors = data;
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
    faqs: {
      initial: 'idle',
      states: {
        idle: { on: { fetchAllFAQs: 'requesting' } },
        requesting: {
          invoke: {
            src: 'handleFetchAllFAQs',
            onDone: {
              target: 'success',
              actions: 'FAQsUpdate',
            },
            onError: {
              target: 'failure',
              actions: 'FAQsError',
            },
          },
        },
        success: {},
        failure: { on: { fetchAllFAQs: 'requesting' } },
      },
    },
  },
};
