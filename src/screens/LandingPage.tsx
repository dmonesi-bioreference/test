import Head from 'next/head';

import { useAppTranslation, TestStatus, Timeline } from 'app';
import { PageLayout, PageSection, UserHeader } from 'components';

export const LandingPage = () => {
  const t = useAppTranslation();

  return (
    <>
      <Head>
        <title>{t('pages.landing.pageTitle')}</title>
      </Head>

      <PageLayout
        containsCards={true}
        customHeader={
          <UserHeader
            title={t('sections.results.patient')}
            name="Lisa Consuela Jackson"
            variant="patient"
          />
        }
      >
        <PageSection>
          <TestStatus />
          <Timeline />
        </PageSection>
      </PageLayout>
    </>
  );
};
