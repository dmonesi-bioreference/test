import { useAppSelector, useAppState } from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';

export function useContent() {
  const state = {
    articles: useAppSelector(
      (state) => state.context.requests.allArticles.values
    ),
    loadingArticles: useAppState('requests.allArticles.requesting'),
    errorFetchingArticles: useAppState('requests.allArticles.failure'),

    faqs: useAppSelector((state) => state.context.requests.allFaqs.values),
    loadingFAQs: useAppState('requests.allFaqs.requesting'),
    errorFetchingFAQs: useAppState('requests.allFaqs.failure'),

    audios: useAppSelector((state) => state.context.requests.allAudios.values),
    loadingAudios: useAppState('requests.allAudios.requesting'),
    errorFetchingAudios: useAppState('requests.allAudios.failure'),
  };

  return [state] as const;
}

export function useContentByTestStatus(contents: (FAQ | Article | Audio)[]) {
  const [{ isWaiting, isResultsReady, isAfterAppointment, isViewed }] =
    useTestStatus();

  const articlesByTestStatus = () => {
    if (isWaiting) {
      return contents.filter((content) => content.introduceAt === 'WAITING');
    } else if (isResultsReady) {
      return contents.filter((content) => content.introduceAt === 'READY');
    } else if (isAfterAppointment) {
      return contents.filter((content) => content.introduceAt === 'DISCUSSED');
    } else if (isViewed) {
      return contents.filter((content) => content.introduceAt === 'VIEWED');
    } else {
      return contents;
    }
  };

  return articlesByTestStatus();
}
