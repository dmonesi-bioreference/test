export async function fetchAllArticles(): Promise<Article[]> {
  const result = await fetch('/api/content/articles');
  return (await result.json()) as Article[];
}
