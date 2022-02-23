import Head from 'next/head';

import { AppLayout } from 'app/components/AppLayout';
import {
  ArticleCards,
  FAQCards,
  AudioCard,
} from 'app/components/ContentElements';
import { useAppTranslation, useAppState } from 'app/components/Shell';
import { useContent } from 'app/hooks';
import { PageSection } from 'components/PageSection';
import { Heading } from 'components/Typography';

export const ResourcesPage = () => {
  const t = useAppTranslation();

  const requesting = useAppState('requests.identityProfile.requesting');
  const [{ loadingFAQs, loadingArticles, loadingAudios }] = useContent();

  return (
    <>
      <Head>
        <title>{t('pages.resources.pageTitle')}</title>
      </Head>
      <AppLayout
        containsCards
        theme="resourcesTheme"
        title={t('pages.resources.title')}
        description={t('pages.resources.description')}
        isLoading={
          requesting || loadingFAQs || loadingArticles || loadingAudios
        }
        hasPatientBanner
      >
        <PageSection>
          <AudioCard />
          <FAQCards />
          <Heading>{t('pages.resources.section.articles.title')}</Heading>
          <ArticleCards />
        </PageSection>
      </AppLayout>
    </>
  );
};
