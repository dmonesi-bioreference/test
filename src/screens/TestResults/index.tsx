import { OnState } from 'app';

import { ResultsReady } from './ResultsReady';
import { WaitingForResults } from './WaitingForResults';

export function TestResults() {
  return (
    <>
      <OnState matches="tests.notAllComple">
        <WaitingForResults />
      </OnState>
      <OnState matches="tests.allComplete.view.viewed">
        <ResultsReady />
      </OnState>
    </>
  );
}
