import { useEffect } from 'react';

import { Card } from 'components/Card';
import { Carousel } from 'components/Carousel';
import { ContentCard } from 'components/ContentCard';
import { Typography } from 'components/Typography';

import { useAppEvents, useAppTranslation } from '../Shell';

import { Content } from './Content';
import {
  useContent,
  useContentByPriority,
  useContentByTestStatus,
} from './hooks';

export interface ArticleCardsProps {
  feature?: Feature;
}

export const ArticleCards: React.FC<ArticleCardsProps> = (props) => {
  const t = useAppTranslation();
  const { allArticlesRequest } = useAppEvents();

  useEffect(allArticlesRequest, [allArticlesRequest]);

  const [{ articles, loadingArticles, errorFetchingArticles }] = useContent();

  const articlesByTestStatus = useContentByTestStatus(articles) as Article[];
  const articlesByPriority = useContentByPriority(
    articlesByTestStatus
  ) as Article[];

  const articlesByFeature = props.feature
    ? articlesByPriority.filter((article) => article.feature === props.feature)
    : articlesByPriority;

  const articleCards = articlesByFeature.map((article) => {
    return (
      <ContentCard
        key={article.id}
        href={`/article${article.slug}`}
        variant="article"
        imageSrc={article.bannerImage?.fullpath as string}
        imageAlt="alt-text"
        label={article.label}
        heading={article.title}
        footer={t('components.articleCard.actions.primary.label')}
      >
        <Content>{article.blurb}</Content>
      </ContentCard>
    );
  });

  return (
    <div>
      {loadingArticles && <Card isLoading />}
      {errorFetchingArticles ? (
        <Typography color="error" level="7" type="heading">
          {t('pages.resources.section.articles.error')}
        </Typography>
      ) : null}

      {articlesByFeature.length !== 0 ? (
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
      ) : null}
    </div>
  );
};
