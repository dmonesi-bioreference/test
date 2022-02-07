import { useAppSelector, useAppState } from 'app/components/Shell';

export function useContent() {
  const state = {
    articles: useAppSelector((state) => state.context.requests.allArticles.values),
    loadingArticles: useAppState('requests.allArticles.requesting'),
    errorFetchingArticles: useAppState('requests.allArticles.failure'),

    loadingFAQs: useAppState('requests.allFaqs.requesting'),
    errorFetchingFAQs: useAppState('requests.allFaqs.failure'),
  };

  return [state] as const;
}
