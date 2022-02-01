import { useEffect } from 'react';

import { useTestStatus } from 'app/components/Timeline/hooks';
import { Carousel, LinkCard, Spinner, Typography } from 'components';
import { tokens } from 'styles';

import { useAppEvents, useAppTranslation } from '../Shell';

import { Content } from './Content';
import { useContent } from './hooks';

export const ArticleCards = () => {
  const t = useAppTranslation();
  const events = useAppEvents();

  useEffect(() => {
    events.fetchAllArticles();
  }, [events]);

  const [{ articles, loadingArticles, errorFetchingArticles }] = useContent();

  const [{ isWaiting, isResultsReady, isAfterAppointment, isViewed }] =
    useTestStatus();

  const articlesByTestStatus = () => {
    if (isWaiting) {
      return articles.filter((article) => article.introduceAt === 'WAITING');
    } else if (isResultsReady) {
      return articles.filter((article) => article.introduceAt === 'READY');
    } else if (isAfterAppointment) {
      return articles.filter((article) => article.introduceAt === 'DISCUSSED');
    } else if (isViewed) {
      return articles.filter((article) => article.introduceAt === 'VIEWED');
    } else {
      return articles;
    }
  };

  const articleCards = articlesByTestStatus().map((article) => {
    return (
      <LinkCard
        key={article.id}
        href={`/demo/article${article.slug}`}
        variant="article"
        imageSrc={article.bannerImage?.fullpath as string}
        imageAlt="alt-text"
        label={article.label}
        heading={article.title}
        footer={t('components.articleCard.actions.primary.label')}
        themeColor={tokens.colorPrimary}
      >
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Content>
            {article.blurb}
          </Content>
        </div>
      </LinkCard>
    );
  });

  return (
    loadingArticles ? (
      <Spinner />
    ) : errorFetchingArticles ? (
      <Typography color="error" level="7" type="heading">
        {t('pages.resources.section.articles.error')}
      </Typography>
    ) : (
      <Carousel
        showIndicator={false}
        externalControl={{
          prevText: t('pages.resources.section.articles.prevArticle'),
          nextText: t('pages.resources.section.articles.nextArticle'),
        }}
        enablePeak={true}
      >
        {articleCards}
      </Carousel>
    )
  );
};
