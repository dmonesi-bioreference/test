import { client } from './client';

export const Content = {
  article: async (context: AppContext): Promise<Article> => {
    if (!context.content.currentArticleIdentifier) return Promise.reject();

    const result = await client.get(
      `/api/content/articles/${context.content.currentArticleIdentifier}`
    );
    return (await result.json()) as Article;
  },
  articles: async (): Promise<Article[]> => {
    const result = await client.get('/api/content/articles');
    return (await result.json()) as Article[];
  },
  audios: async (): Promise<Audio[]> => {
    const result = await client.get('/api/content/audios');
    return (await result.json()) as Audio[];
  },
  faqs: async function fetchAllFAQs(): Promise<FAQ[]> {
    const result = await client.get('/api/content/faqs');
    return (await result.json()) as FAQ[];
  },
  faq: async (context: AppContext): Promise<FAQ> => {
    if (!context.content.currentFAQSlug) return Promise.reject();

    const result = await client.get(
      `/api/content/faqs/${context.content.currentFAQSlug}`
    );
    return (await result.json()) as FAQ;
  },
  internalLinkCards: async (): Promise<InternalLinkCard[]> => {
    const result = await client.get('/api/content/internalLinkCards');
    return (await result.json()) as InternalLinkCard[];
  },
  onBoardingCards: async (): Promise<OnBoardingCard[]> => {
    const result = await fetch('/api/content/on-boarding-cards');
    return (await result.json()) as OnBoardingCard[];
  },
};
