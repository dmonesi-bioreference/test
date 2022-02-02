import { useAppSelector, useAppState } from 'app/components/Shell';

export function useContent() {
  const state = {
    articles: useAppSelector((state) => state.context.content.articles.data),
    loadingArticles: useAppState('content.articles.fetchingAllArticles'),
    errorFetchingArticles: useAppState('content.articles.failure'),

    loadingFAQs: useAppState('content.faqs.fetchingAllFAQs'),
    errorFetchingFAQs: useAppState('content.faqs.failure'),
  };

  return [state] as const;
}
