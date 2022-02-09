import Head from 'next/head';

import {
  ArticleCards,
  FAQCards,
  AudioCard,
} from 'app/components/ContentElements';
import { useContent } from 'app/components/ContentElements/hooks';
import { useAppTranslation, useAppState } from 'app/components/Shell';
import { PageLayout } from 'components/PageLayout';
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
      <PageLayout
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
      </PageLayout>
    </>
  );
};
