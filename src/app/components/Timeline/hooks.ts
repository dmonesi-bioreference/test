import { useAppSelector, useAppState } from 'app/components/Shell';

export function useTestStatus() {
  const state = {
    photo: useAppSelector((state) => state.context.geneticCounselor.photo),
    isWaiting: useAppState('tests.waitingOnTests'),
    isResultsReady: useAppState('tests.testsReady.appointment.unknownAppointmentStatus'),
    isAtAppointment: useAppState('tests.testsReady.appointment.atAppointment'),
    isAfterAppointment: useAppState('tests.testsReady.appointment.afterAppointment')
  };
  
  return [state] as const;
}
