import Head from 'next/head';

import { MainNavPageLayout } from 'app/components/AppLayout';
import {
  ArticleCards,
  FAQCards,
  AudioCard,
} from 'app/components/ContentElements';
import { useAppTranslation, useAppState } from 'app/components/Shell';
import { useContent } from 'app/hooks';
import { PageSection } from 'components/PageSection';

export const ResourcesPage = () => {
  const t = useAppTranslation();

  const requesting = useAppState('requests.identityProfile.requesting');
  const [{ loadingFAQs, loadingArticles, loadingAudios }] = useContent();

  return (
    <>
      <Head>
        <title>{t('pages.resources.pageTitle')}</title>
      </Head>
      <MainNavPageLayout
        theme="resourcesTheme"
        title={t('pages.resources.title')}
        description={t('pages.resources.description')}
        isLoading={
          requesting || loadingFAQs || loadingArticles || loadingAudios
        }
      >
        <PageSection>
          <AudioCard />
          <FAQCards />
        </PageSection>

        <PageSection title={t('pages.resources.section.articles.title')}>
          <ArticleCards />
        </PageSection>
      </MainNavPageLayout>
    </>
  );
};
