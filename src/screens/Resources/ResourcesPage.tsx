import Head from 'next/head';

import {
  useAppTranslation,
  useAppState,
  ArticleCards,
  FAQCards,
  AudioCard,
} from 'app';
import { PatientBanner } from 'app/components';
import { useContent } from 'app/components/ContentElements/hooks';
import { Heading, PageLayout, PageSection } from 'components';

export const ResourcesPage = () => {
  const t = useAppTranslation();

  const requesting = useAppState('requests.identityProfile.requesting');
  const [{ loadingFAQs, loadingArticles, loadingAudios }] = useContent();

  return (
    <>
      <Head>
        <title>{t('pages.resources.pageTitle')}</title>
      </Head>
      <PageLayout
        containsCards
        theme="resourcesTheme"
        title={t('pages.resources.title')}
        description={t('pages.resources.description')}
        customHeader={<PatientBanner />}
        loading={requesting || loadingFAQs || loadingArticles || loadingAudios}
      >
        <PageSection>
          <AudioCard />
          <FAQCards />
          <Heading>{t('pages.resources.section.articles.title')}</Heading>
          <ArticleCards />
        </PageSection>
      </PageLayout>
    </>
  );
};
