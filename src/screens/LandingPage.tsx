import Head from 'next/head';

import { InternalLinkCards } from 'app/components/ContentElements';
import { useAppTranslation } from 'app/components/Shell';
import { TestStatus } from 'app/components/TestStatus';
import { Timeline } from 'app/components/Timeline';
import { PageLayout } from 'components/PageLayout';
import { PageSection } from 'components/PageSection';

export const LandingPage = () => {
  const t = useAppTranslation();

  return (
    <>
      <Head>
        <title>{t('pages.landing.pageTitle')}</title>
      </Head>

      <PageLayout containsCards hasPatientBanner>
        <PageSection>
          <TestStatus />
          <Timeline />
          <InternalLinkCards />
        </PageSection>
      </PageLayout>
    </>
  );
};
