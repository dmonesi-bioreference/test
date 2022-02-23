import { useAppSelector, useAppState } from 'app/components/Shell';

/**
 * @returns The current app test state object
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
    loadingReport: useAppState('tests.allComplete.report.fetchingReport'),
    errorLoadingReport: useAppState('tests.allComplete.report.errorFetchingReport'),
  };

  return [state] as const;
}
