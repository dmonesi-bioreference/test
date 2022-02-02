import {
  useAppTranslation,
  MediaElements,
  useAppState,
  ArticleCards,
  FAQCards,
} from 'app';
import {
  BulletItem,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  Typography,
  Spinner,
  UserHeader,
} from 'components';

export const ResourcesPage = () => {
  const t = useAppTranslation();

  const loadingArticles = useAppState('content.articles.fetchingAllArticles');
  const errorFetchingArticles = useAppState('content.articles.failure');
  const loadingFAQs = useAppState('content.faqs.fetchingAllFAQs');
  const errorFetchingFAQs = useAppState('content.faqs.failure');

  const patientData = {
    shortName: 'Lisa',
    fullName: 'Lisa Consuela Jackson',
    dob: new Date(Date.UTC(2012, 1, 14)),
    genderGenetic: 'Female',
    genderIdentified: 'Female',
    insurance: 'Kaiser',
    relationToCaregiver: 'Child',
    phenotype: 'Phenotype information here',
  };

  return (
    <PageLayout
      containsCards
      theme="resourcesTheme"
      title={t('pages.resources.title')}
      description={t('pages.resources.description')}
      customHeader={
        <UserHeader
          title={t('sections.results.patient')}
          name={patientData.fullName}
          variant="patient"
        />
      }
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
        {loadingArticles ? (
          <Spinner />
        ) : errorFetchingArticles ? (
          <Typography color="error" level="7" type="heading">
            {t('pages.resources.section.articles.error')}
          </Typography>
        ) : (
          <ArticleCards />
        )}
      </PageSection>
    </PageLayout>
  );
};
