import { useEffect } from 'react';

import { Carousel } from 'components/Carousel';
import { ContentCard } from 'components/ContentCard';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';
import { tokens } from 'styles';

import { useAppEvents, useAppTranslation } from '../Shell';

import { Content } from './Content';
import { useContent, useContentByTestStatus } from './hooks';

export interface ArticleCardsProps {
  feature?: Feature;
}

export const ArticleCards: React.FC<ArticleCardsProps> = (props) => {
  const t = useAppTranslation();
  const { allArticlesRequest } = useAppEvents();

  useEffect(allArticlesRequest, [allArticlesRequest]);

  const [{ articles, loadingArticles, errorFetchingArticles }] = useContent();

  const articlesByTestStatus = useContentByTestStatus(articles) as Article[];

  const articlesByFeature = props.feature
    ? articlesByTestStatus.filter(
        (article) => article.feature === props.feature
      )
    : articlesByTestStatus;

  const articleCards = articlesByFeature.map((article) => {
    return (
      <ContentCard
        key={article.id}
        href={`/demo/article${article.slug}`}
        variant="article"
        imageSrc={article.bannerImage?.fullpath as string}
        imageAlt="alt-text"
        label={article.label}
        heading={article.title}
        footer={t('components.articleCard.actions.primary.label')}
      >
        <div style={{ marginBottom: tokens.spacingLarge }}>
          <Content>{article.blurb}</Content>
        </div>
      </ContentCard>
    );
  });

  return (
    <div>
      {loadingArticles ? <Spinner /> : null}
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
