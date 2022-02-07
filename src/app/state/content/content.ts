import { assign } from '@xstate/immer';
declare global {
  interface AppEventMap {
    setArticleIdentifier: {
      type: 'SET_ARTICLE_IDENTIFIER';
      articleIdentifier: string;
    };
    setFaqSlug: {
      type: 'SET_FAQ_SLUG';
      FAQSlug: string;
    };
  }
}

export const context: {
  currentArticleIdentifier?: string;
  currentFAQSlug?: string;
} = {
};

export const actions = {
  setArticleIdentifier: assign((context: AppContext, event: AppEvents) => {
    const articleIdentifier =
      'articleIdentifier' in event ? event?.articleIdentifier : '';
    context.content.currentArticleIdentifier = articleIdentifier;
  }),
  setFaqSlug: assign((context: AppContext, event: AppEvents) => {
    const FAQSlug = 'FAQSlug' in event ? event?.FAQSlug : '';
    context.content.currentFAQSlug = FAQSlug;
  }),
};

export const machine = {
  type: 'parallel',
  states: {
    idle: {
      on: {
        SET_ARTICLE_IDENTIFIER: {
          actions: ['setArticleIdentifier'],
        },
        SET_FAQ_SLUG: {
          actions: ['setFaqSlug'],
        },
      },
    },
  },
};
