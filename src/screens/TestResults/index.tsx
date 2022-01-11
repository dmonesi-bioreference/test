import { OnState } from 'app';

import { PreResultsPause } from './PreResultsPause';
import { ResultsReady } from './ResultsReady';
import { WaitingForResults } from './WaitingForResults';

export function TestResults() {
  return (
    <>
      <OnState matches="tests.waitingOnTests">
        <WaitingForResults />
      </OnState>
      <OnState matches="tests.testsReady.view.notViewed">
        <PreResultsPause />
      </OnState>
      <OnState matches="tests.testsReady.view.viewed">
        <ResultsReady />
      </OnState>
    </>
  );
}
