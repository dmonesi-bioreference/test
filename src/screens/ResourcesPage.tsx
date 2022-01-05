import { useEffect } from 'react';

import { useAppEvents, useAppSelector, useAppTranslation, MediaElements } from 'app';
import {
  AppImage,
  BulletItem,
  Button,
  Card,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  Typography,
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

  const articleCards = articles.map((article) => {
    return (
      <Card
        key={article.id}
        header={
          <AppImage
            src={article.bannerImage.srcUrl}
            alt={article.bannerImage.altText}
            width={343}
            height={189}
          />
        }
      >
        <div style={{ marginBottom: tokens.spacingXSmall }}>
          <Typography type="label" labelType="title" color="primary">
            {article.label}
          </Typography>
        </div>
        <div style={{ marginBottom: tokens.spacing }}>
          <Heading>{article.title}</Heading>
        </div>
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Typography type="body">
            {article.content.map((textBlock) => textBlock.content).join()}
          </Typography>
        </div>
        <Button kind="primary" href="/resources/real-family-story-81707">
          {t('sections.resources.story.readMore')}
        </Button>
      </Card>
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
        {articleCards}
      </PageSection>
    </PageLayout>
  );
};
