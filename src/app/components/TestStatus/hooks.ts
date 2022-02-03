import { useAppSelector, useAppState } from 'app/components/Shell';

export function useTestStatus() {
  const test = useAppSelector((state) => {
    return state.context.tests.tests[0];
  });

  const state = {
    loading: useAppState('tests.loading'),
    errorLoading: useAppState('tests.notLoaded'),
    isWaiting: useAppState('tests.notAllComple'),
    percentComplete: test ? test.percentComplete : 0,
    expectedResultsDate: test ? test.expectedResultsDate : '',
    lastUpdated: test ? test.lastUpdated : '',
  };
  
  return [state] as const;
}