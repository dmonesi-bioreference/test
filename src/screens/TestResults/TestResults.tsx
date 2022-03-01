import Head from 'next/head';

import { OnState, useAppState, useAppTranslation } from 'app';
import { AppLayoutProps, MainNavPageLayout } from 'app/components/AppLayout';
import { Card } from 'components/Card';
import { Spinner } from 'components/Spinner';
import { Heading } from 'components/Typography';

import { ResultsReady } from './ResultsReady';
import { WaitingForResults } from './WaitingForResults';

export function TestResults() {
  const t = useAppTranslation();
  const requesting = useAppState('requests.identityProfile.requesting');

  return (
    <>
      <Head>
        <title>{t('pages.results.pageTitle')}</title>
      </Head>

      <OnState matches="tests.idle">
        <ResultsPageLayout isLoading={requesting}>
          <Card>
            <Heading level="7">{t('sections.results.notLoaded')}</Heading>
          </Card>
        </ResultsPageLayout>
      </OnState>

      <OnState matches="tests.loading">
        <ResultsPageLayout isLoading={requesting}>
          <Card>
            <Spinner data-testid="spinner-testStatus" />
          </Card>
        </ResultsPageLayout>
      </OnState>

      <OnState matches="tests.errorLoading">
        <ResultsPageLayout isLoading={requesting}>
          <Card>
            <Heading color="error" level="7">
              {t('sections.results.error')}
            </Heading>
          </Card>
        </ResultsPageLayout>
      </OnState>

      <OnState matches="tests.notAllComplete">
        <WaitingForResults isLoading={requesting} />
      </OnState>

      <OnState matches="tests.allComplete">
        <ResultsReady isLoading={requesting} />
      </OnState>
    </>
  );
}

const ResultsPageLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <MainNavPageLayout theme="healthProfileTheme" isLoading={props.isLoading}>
      {props.children}
    </MainNavPageLayout>
  );
};
