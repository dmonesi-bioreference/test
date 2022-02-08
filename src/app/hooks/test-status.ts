import { useAppSelector, useAppState } from 'app/components/Shell';

/**
 * @returns The current app test state object
 */
export function useTestStatus() {
  const state = {
    photo: useAppSelector((state) => state.context.geneticCounselor.photo),
    notLoaded: useAppState('tests.idle'),
    loading: useAppState('tests.loading'),
    errorLoading: useAppState('tests.errorLoading'),
    isWaiting: useAppState('tests.notAllComplete'),
    isResultsReady: useAppState(
      'tests.allComplete.appointment.unknownAppointmentStatus'
    ),
    isAtAppointment: useAppState('tests.allComplete.appointment.atAppointment'),
    isAfterAppointment: useAppState(
      'tests.allComplete.appointment.afterAppointment'
    ),
    isViewed: useAppState('tests.allComplete.view'),
  };

  return [state] as const;
}
