import { assign } from '@xstate/immer';

import {
  isArticlePayload,
  isMultiArticlePayload,
  isContentFailurePayload,
  isFAQPayload,
} from './models';

declare global {
  interface AppEventMap {
    fetchSingleArticle: {
      type: 'FETCH_SINGLE_ARTICLE',
      articleId: string,
    };
    fetchAllArticles: {
      type: 'fetchAllArticles';
    };
    fetchAllFAQs: {
      type: 'fetchAllFAQs';
    };
  }
}

export const context: {
  currentArticleId?: string,
  articles: { data: Article[], errors: ContentFailure[] },
  FAQs: { data: FAQ[], errors: ContentFailure[] },
} = {
  articles: { data: [], errors: [] },
  FAQs: { data: [], errors: [] },
};

export const actions = {
  collectArticleId: assign((context: AppContext, event: AppEvents) => {
    const articleId = 'articleId' in event ? event?.articleId : '';
    context.content.currentArticleId = articleId;
  }),
  articlesUpdate: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isArticlePayload(data)) {
      context.content.articles.data = [data];
    }
    if (isMultiArticlePayload(data)) {
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
        idle: {
          on: {
            FETCH_SINGLE_ARTICLE: {
              target: 'fetchingSingleArticle',
              actions: ['collectArticleId'],
            },
            fetchAllArticles: 'fetchingAllArticles',
          },
        },
        fetchingSingleArticle: {
          invoke: {
            src: 'handleFetchArticle',
            onDone: {
              target: 'idle',
              actions: 'articlesUpdate'
            },
            onError: {
              target: 'failure',
              actions: 'articlesError',
            },
          },
        },
        fetchingAllArticles: {
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
        failure: {
          on: {
            FETCH_SINGLE_ARTICLE: {
              target: 'fetchingSingleArticle',
              actions: ['collectArticleId'],
            },
            fetchAllArticles: 'fetchingAllArticles',
          },
        },
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
