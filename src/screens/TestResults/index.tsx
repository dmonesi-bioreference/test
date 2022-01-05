import { OnState } from 'app';

import { PreResultsPause } from './PreResultsPause';
import { ResultsReady } from './ResultsReady';
import { WaitingForResults } from './WaitingForResults';

export function TestResults() {
  return (
    <>
      <OnState matches="test.waiting">
        <WaitingForResults />
      </OnState>
      <OnState matches="test.resultsReady.view.notViewed">
        <PreResultsPause />
      </OnState>
      <OnState matches="test.resultsReady.view.viewed">
        <ResultsReady />
      </OnState>
    </>
  );
}
