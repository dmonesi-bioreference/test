import Head from 'next/head';

import { OnState, useAppState, useAppTranslation, useTestStatus } from 'app';
import { AppLayout } from 'app/components/AppLayout';
import { Card } from 'components/Card';
import { PageSection } from 'components/PageSection';
import { Spinner } from 'components/Spinner';
import { Heading } from 'components/Typography';

import { ResultsReady } from './ResultsReady';
import { WaitingForResults } from './WaitingForResults';

export function TestResults() {
  const t = useAppTranslation();
  const [{ isWaiting, isResultsReady }] = useTestStatus();
  const requesting = useAppState('requests.identityProfile.requesting');

  const getTitle = () => {
    if (isWaiting) return t('pages.results.waiting.title');
    if (isResultsReady) return t('pages.results.ready.title');
    return '';
  };

  return (
    <>
      <Head>
        <title>{t('pages.results.pageTitle')}</title>
      </Head>
      <AppLayout
        containsCards
        hasPatientBanner
        theme="healthProfileTheme"
        title={getTitle()}
        isLoading={requesting}
        hasReturnLink
      >
        <PageSection>
          <OnState matches="tests.idle">
            <Card>
              <Heading level="7">{t('sections.results.notLoaded')}</Heading>
            </Card>
          </OnState>
          <OnState matches="tests.loading">
            <Card>
              <Spinner data-testid="spinner-testStatus" />
            </Card>
          </OnState>
          <OnState matches="tests.errorLoading">
            <Card>
              <Heading color="error" level="7">
                {t('sections.results.error')}
              </Heading>
            </Card>
          </OnState>
          <OnState matches="tests.notAllComplete">
            <WaitingForResults />
          </OnState>
          <OnState matches="tests.allComplete">
            <ResultsReady />
          </OnState>
        </PageSection>
      </AppLayout>
    </>
  );
}
