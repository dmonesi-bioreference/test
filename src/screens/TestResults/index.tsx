import Head from 'next/head';

import { OnState, useAppTranslation } from 'app';

import { ResultsReady } from './ResultsReady';
import { WaitingForResults } from './WaitingForResults';

export function TestResults() {
  const t = useAppTranslation();

  return (
    <>
      <Head>
        <title>{t('pages.results.pageTitle')}</title>
      </Head>
      <OnState matches="tests.notAllComplete">
        <WaitingForResults />
      </OnState>
      <OnState matches="tests.allComplete.view.viewed">
        <ResultsReady />
      </OnState>
    </>
  );
}
