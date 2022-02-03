import Head from 'next/head';

import { useAppTranslation, TestStatus, Timeline, PatientBanner } from 'app';
import { PageLayout, PageSection } from 'components';

export const LandingPage = () => {
  const t = useAppTranslation();

  return (
    <>
      <Head>
        <title>{t('pages.landing.pageTitle')}</title>
      </Head>

      <PageLayout containsCards={true} customHeader={<PatientBanner />}>
        <PageSection>
          <TestStatus />
          <Timeline />
        </PageSection>
      </PageLayout>
    </>
  );
};
