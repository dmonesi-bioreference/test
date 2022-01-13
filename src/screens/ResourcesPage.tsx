import { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

import {
  useAppEvents,
  useAppSelector,
  useAppTranslation,
  MediaElements,
  useAppState,
} from 'app';
import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';
import {
  BulletItem,
  Button,
  LinkCard,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  Typography,
  Spinner,
} from 'components';
import { tokens } from 'styles';

export const ResourcesPage = () => {
  const t = useAppTranslation();
  const events = useAppEvents();

  useEffect(() => {
    events.fetchAllArticles();
  }, [events]);

  const articles = useAppSelector(
    (state) => state.context.content.articles.data
  );
  const loading = useAppState('content.articles.requesting');
  const error = useAppState('content.articles.failure');

  /* eslint-disable @typescript-eslint/no-unsafe-call */
  const articleCards = articles.map((article) => {
    return (
      <LinkCard
        key={article.id}
        variant="article"
        imageSrc={InTheNICUImage}
        imageAlt="alt-text"
        label={article.label}
        heading={article.title}
        themeColor={tokens.colorPrimary}
      >
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Typography type="body">
            <div>{ReactHtmlParser(article.blurb)}</div>
          </Typography>
        </div>
        <Button kind="primary" href="#">
          {t('sections.resources.story.readMore')}
        </Button>
      </LinkCard>
    );
  });

  return (
    <PageLayout containsCards={true} theme="resources">
      <PageSection
        header={
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <div style={{ marginBottom: tokens.spacing }}>
              <Heading>{t('pages.resources.title')}</Heading>
            </div>
            <Typography type="body">{t('pages.resources.subTitle')}</Typography>
          </div>
        }
      >
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
        <Heading>{t('pages.resources.section.articles.title')}</Heading>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Typography color="error" level="7" type="heading">
            Error fetching content.
          </Typography>
        ) : (
          articleCards
        )}
      </PageSection>
    </PageLayout>
  );
};
