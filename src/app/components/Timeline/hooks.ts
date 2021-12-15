import { useAppState } from 'app/components/Shell';

export function useTestStatus() {
  const state = {
    isWaiting: useAppState('test.waiting'),
    isResultsReady: useAppState('test.resultsReady.unknownAppointmentStatus'),
    isAtAppointment: useAppState('test.resultsReady.atAppointment'),
    isAfterAppointment: useAppState('test.resultsReady.afterAppointment')
  };
  
  return [state] as const;
}
