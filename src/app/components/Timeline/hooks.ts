import { useAppSelector, useAppState } from 'app/components/Shell';

export function useTestStatus() {
  const state = {
    photo: useAppSelector((state) => state.context.geneticCounselor.photo),
    isWaiting: useAppState('test.waiting'),
    isResultsReady: useAppState('test.resultsReady.appointment.unknownAppointmentStatus'),
    isAtAppointment: useAppState('test.resultsReady.appointment.atAppointment'),
    isAfterAppointment: useAppState('test.resultsReady.appointment.afterAppointment')
  };
  
  return [state] as const;
}
