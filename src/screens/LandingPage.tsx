import Head from 'next/head';

import { useAppTranslation, InternalLinkCards, TestStatus, Timeline} from 'app';
import { PageLayout, PageSection } from 'components';

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
