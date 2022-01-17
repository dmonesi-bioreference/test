export async function fetchSingleArticleFromContext(context: AppContext): Promise<Article> {
  if (!context.content.currentArticleId) return Promise.reject();

  const result = await fetch(`/api/content/article/${context.content.currentArticleId}`);
  return (await result.json()) as Article;
}

export async function fetchAllArticles(): Promise<Article[]> {
  const result = await fetch('/api/content/articles');
  return (await result.json()) as Article[];
}

export async function fetchAllFAQs(): Promise<FAQ[]> {
  const result = await fetch('/api/content/faqs');
  return (await result.json()) as FAQ[];
}
