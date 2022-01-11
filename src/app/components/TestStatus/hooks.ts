import { useAppSelector, useAppState } from 'app/components/Shell';

export function useTestStatus() {
  const test = useAppSelector((state) => {
    return state.context.tests.tests[0];
  });

  const state = {
    isWaiting: useAppState('tests.waitingOnTests'),
    percentComplete: test ? test.percentComplete : 0,
    expectedResultsDate: test ? test.expectedResultsDate : '',
    lastUpdated: test ? test.lastUpdated : '',
  };
  
  return [state] as const;
}