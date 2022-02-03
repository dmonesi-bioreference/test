import { useAppSelector, useAppState } from 'app/components/Shell';

export function useTestStatus() {
  const state = {
    photo: useAppSelector((state) => state.context.geneticCounselor.photo),
    loading: useAppState('tests.loading'),
    errorLoading: useAppState('tests.notLoaded'),
    isWaiting: useAppState('tests.notAllComple'),
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
