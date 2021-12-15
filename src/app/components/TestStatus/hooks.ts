import { useAppSelector, useAppState } from 'app/components/Shell';

export function useTestStatus() {
  const percentComplete = useAppSelector((state) => state.context.test.percentComplete);
  const lastUpdated = useAppSelector((state) => state.context.test.lastUpdated);
  const expectedResultsDate = useAppSelector((state) => state.context.test.expectedResultsDate);

  const state = {
    isWaiting: useAppState('test.waiting'),
    percentComplete,
    lastUpdated,
    expectedResultsDate,
  };
  
  return [state] as const;
}