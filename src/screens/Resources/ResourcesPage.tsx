import Head from 'next/head';

import {
  useAppTranslation,
  MediaElements,
  useAppState,
  ArticleCards,
  FAQCards,
} from 'app';
import { PatientBanner } from 'app/components/PatientBanner';
import {
  BulletItem,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  Typography,
  Spinner,
} from 'components';

export const ResourcesPage = () => {
  const t = useAppTranslation();

  const loadingFAQs = useAppState('content.faqs.fetchingAllFAQs');
  const errorFetchingFAQs = useAppState('content.faqs.failure');

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
      >
        <PageSection>
          <MediaElements.Audio
            src="https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav"
            title={t('pages.resources.section.audio.title')}
            transcript={[
              <BulletItem
                key={1}
                icon={<Icon name="arrow-circle-right" />}
                title={t('pages.resources.section.audio.bulletOneTitle')}
              >
                {' '}
                {t('pages.resources.section.audio.bulletOneDescription')}{' '}
              </BulletItem>,
              <BulletItem
                key={2}
                icon={<Icon name="arrow-circle-right" />}
                title={t('pages.resources.section.audio.bulletTwoTitle')}
              >
                {' '}
                {t('pages.resources.section.audio.bulletTwoDescription')}{' '}
              </BulletItem>,
            ]}
          >
            {t('pages.resources.description')}
          </MediaElements.Audio>
          {loadingFAQs ? (
            <Spinner />
          ) : errorFetchingFAQs ? (
            <Typography color="error" level="7" type="heading">
              {t('pages.resources.section.faqs.error')}
            </Typography>
          ) : (
            <FAQCards />
          )}
          <Heading>{t('pages.resources.section.articles.title')}</Heading>
          <ArticleCards />
        </PageSection>
      </PageLayout>
    </>
  );
};
