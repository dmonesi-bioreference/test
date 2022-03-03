import { useAppSelector, useAppState } from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';

/**
 * useContent is a hook that allows you access the state of requests for CMS content.
 * This hook grabs the running xstate requests chart from our app's context, specific to the types of content that are being fetched.
 * @returns The state of requests for content, either in loading or error states, or returns the content itself e.g. a list of articles.
 * @example
 * const [{ articles, loadingArticles, errorFetchingArticles }] = useContent();
 */

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

    internalLinkCards: useAppSelector(
      (state) => state.context.requests.allInternalLinkCards.values
    ),
    loadingInternalLinkCards: useAppState(
      'requests.allInternalLinkCards.requesting'
    ),
    errorLoadingInternalLinkCards: useAppState(
      'requests.allInternalLinkCards.failure'
    ),

    audios: useAppSelector((state) => state.context.requests.allAudios.values),
    loadingAudios: useAppState('requests.allAudios.requesting'),
    errorFetchingAudios: useAppState('requests.allAudios.failure'),

    onBoardingCards: useAppSelector(
      (state) => state.context.requests.allOnBoardingCards.values
    ),
    loadingOnBoardingCards: useAppState(
      'requests.allOnBoardingCards.requesting'
    ),
    errorFetchingOnBoardingCards: useAppState(
      'requests.allOnBoardingCards.failure'
    ),

    avatars: useAppSelector(
      (state) => state.context.requests.allAvatars.values
    ),
    loadingAvatars: useAppState('requests.allAvatars.requesting'),
    errorFetchingAvatars: useAppState('requests.allAvatars.failure'),
  };

  return [state] as const;
}

/**
 * useContentByTestStatus is a hook which leverages the `useTestStatus` hook
 * to filter for content relevant to the status of the results of a test sample.
 * @param contents A list of content objects, with property 'introduceAt'.
 * @returns Content filtered by the status of the patients test results.
 * @example
 * const articlesByTestStatus = useContentByTestStatus(articles);
 */

export function useContentByTestStatus<
  T extends { introduceAt?: IntroduceAt | undefined }
>(contents: T[]) {
  const [{ isWaiting, isBeforeAppointment, isAfterAppointment, isViewed }] =
    useTestStatus();

  const articlesByTestStatus = () => {
    if (isWaiting) {
      return contents.filter((content) => content.introduceAt === 'WAITING');
    } else if (isBeforeAppointment) {
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

/**
 * useContentByPriority is a hook which leverages the `useTestStatus` hook
 * to order content by priority, 1 being the highest priority.
 * @param contents A list of content objects, with property 'priority'.
 * @returns Content ordered by priority.
 * @example
 * const articlesByPriority = useContentByPriority(articlesByTestStatus);
 */

export function useContentByPriority<
  T extends { priority?: number | undefined }
>(contents: T[]) {
  return contents.slice().sort((a, b) => {
    if (!a.priority) {
      return -1;
    } else if (!b.priority) {
      return 1;
    } else {
      return a.priority < b.priority ? -1 : 1;
    }
  });
}
