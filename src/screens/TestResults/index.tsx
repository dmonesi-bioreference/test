import { OnState } from 'app';

import { ResultsReady } from './ResultsReady';
import { WaitingForResults } from './WaitingForResults';

export function TestResults() {
  return (
    <>
      <OnState matches="tests.waitingOnTests">
        <WaitingForResults />
      </OnState>
      <OnState matches="tests.testsReady.view.viewed">
        <ResultsReady />
      </OnState>
    </>
  );
}
