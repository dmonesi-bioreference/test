import { useAppSelector } from 'app/components/Shell';

export function useTestResults() {
  const test = useAppSelector((state) => {
    return state.context.tests.tests[0];
  });

  const state = {
    percentComplete: test ? test.percentComplete : 0,
    expectedResultsDate: test ? test.expectedResultsDate : '',
  };
  
  return [state] as const;
}