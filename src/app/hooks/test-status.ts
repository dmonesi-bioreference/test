import { useAppSelector, useAppState } from 'app/components/Shell';

/**
 * useTestStatus is a hook that allows you access the state for the status of a patients test sample.
 * This hook grabs the running xstate tests chart from our app's context.
 * Currently, there is no trigger to update the status of a test to `isAtAppointment`, or `isAfterAppointment`.
 * The state defaults to `isBeforeAppointment` when results are ready.
 * @returns The state of tests results, either in loading or error states, or returns the test status itself ranging from 'isWaiting' to 'isViewed'.
 * @example
 * const [{loading, errorLoading, isWaiting, isBeforeAppointment, isAtAppointment, isAfterAppointment}] = useTestStatus();
 */

export function useTestStatus() {
  const test = useAppSelector((state) => {
    return state.context.tests.tests[0];
  });

  const state = {
    test,
    notLoaded: useAppState('tests.idle'),
    loading: useAppState('tests.loading'),
    errorLoading: useAppState('tests.errorLoading'),
    isWaiting: useAppState('tests.notAllComplete'),
    isResultsReady: useAppState('tests.allComplete'),
    isBeforeAppointment: useAppState(
      'tests.allComplete.appointment.beforeAppointment'
    ),
    isAtAppointment: useAppState('tests.allComplete.appointment.atAppointment'),
    isAfterAppointment: useAppState(
      'tests.allComplete.appointment.afterAppointment'
    ),
    isViewed: useAppState('tests.allComplete.view'),
    loadingReport: useAppState('tests.allComplete.report.loadingReport'),
    errorLoadingReport: useAppState('tests.allComplete.report.errorLoadingReport'),
  };

  return [state] as const;
}
