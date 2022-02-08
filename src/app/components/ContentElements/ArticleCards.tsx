import { useEffect } from 'react';

import { Carousel, LinkCard, Spinner, Typography } from 'components';
import { tokens } from 'styles';

import { useAppEvents, useAppTranslation } from '../Shell';

import { Content } from './Content';
import { useContent, useContentByTestStatus } from './hooks';

export const ArticleCards = () => {
  const t = useAppTranslation();
  const { allArticlesRequest } = useAppEvents();

  useEffect(allArticlesRequest, [allArticlesRequest]);

  const [{ articles, loadingArticles, errorFetchingArticles }] = useContent();

  const articlesByTestStatus = useContentByTestStatus(articles) as Article[];

  const articleCards = articlesByTestStatus.map((article) => {
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
          <Content>{article.blurb}</Content>
        </div>
      </LinkCard>
    );
  });

  return loadingArticles ? (
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
  );
};
