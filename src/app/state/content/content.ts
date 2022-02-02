import { assign } from '@xstate/immer';

import {
  isArticlePayload,
  isMultiArticlePayload,
  isContentFailurePayload,
  isFAQPayload,
  isMultiFAQPayload,
  withDomain,
} from './models';

declare global {
  interface AppEventMap {
    fetchSingleArticle: {
      type: 'FETCH_SINGLE_ARTICLE';
      articleIdentifier: string;
    };
    fetchSingleFAQ: {
      type: 'FETCH_SINGLE_FAQ';
      FAQSlug: string;
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
  currentArticleIdentifier?: string;
  currentFAQSlug?: string;
  articles: { data: Article[]; errors: ContentFailure[] };
  FAQs: { data: FAQ[]; errors: ContentFailure[] };
} = {
  articles: { data: [], errors: [] },
  FAQs: { data: [], errors: [] },
};

export const actions = {
  collectArticleId: assign((context: AppContext, event: AppEvents) => {
    const articleIdentifier =
      'articleIdentifier' in event ? event?.articleIdentifier : '';
    context.content.currentArticleIdentifier = articleIdentifier;
  }),
  collectFAQSlug: assign((context: AppContext, event: AppEvents) => {
    const FAQSlug = 'FAQSlug' in event ? event?.FAQSlug : '';
    context.content.currentFAQSlug = FAQSlug;
  }),
  articlesUpdate: assign((context: AppContext, event: AppEvents) => {
    const data = 'data' in event ? event?.data : [];
    if (isArticlePayload(data)) {
      context.content.articles.data = [withDomain(data)];
    }
    if (isMultiArticlePayload(data)) {
      context.content.articles.data = data.map((e) => withDomain(e));
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
      context.content.FAQs.data = [data];
    }
    if (isMultiFAQPayload(data)) {
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
              actions: 'articlesUpdate',
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
        idle: {
          on: {
            FETCH_SINGLE_FAQ: {
              target: 'fetchingSingleFAQ',
              actions: ['collectFAQSlug'],
            },
            fetchAllFAQs: 'fetchingAllFAQs',
          },
        },
        fetchingSingleFAQ: {
          invoke: {
            src: 'handleFetchFAQ',
            onDone: {
              target: 'idle',
              actions: 'FAQsUpdate',
            },
            onError: {
              target: 'failure',
              actions: 'FAQsError',
            },
          },
        },
        fetchingAllFAQs: {
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
        failure: {
          on: {
            FETCH_SINGLE_FAQ: {
              target: 'fetchingSingleFAQ',
              actions: ['collectFAQSlug'],
            },
            fetchAllFAQs: 'fetchingAllFAQs',
          },
        },
      },
    },
  },
};
