export const Content = {
  article: async (context: AppContext): Promise<Article> => {
    if (!context.content.currentArticleId) return Promise.reject();

    const result = await fetch(
      `/api/content/articles/${context.content.currentArticleId}`
    );
    return (await result.json()) as Article;
  },
  articles: async (): Promise<Article[]> => {
    const result = await fetch('/api/content/articles');
    return (await result.json()) as Article[];
  },
  faqs: async function fetchAllFAQs(): Promise<FAQ[]> {
    const result = await fetch('/api/content/faqs');
    return (await result.json()) as FAQ[];
  },
};
