import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import { ContentPageLayout } from 'app/components/AppLayout';
import { ContentWithPimcore } from 'app/components/ContentElements';
import {
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { ContentBlock } from 'components/ContentBlock';
import { PageSection } from 'components/PageSection';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';

interface ArticlePageProps {
  articleIdentifier?: string;
}

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
  const t = useAppTranslation();
  const { setArticleIdentifier, singleArticleRequest } = useAppEvents();
  const [article, setArticle] = useState<Article>();

  const { articleIdentifier } = props;

  const loading = useAppState('requests.singleArticle.requesting');
  const error = useAppState('requests.singleArticle.failure');
  const articles = useAppSelector(
    (state) => state.context.requests.allArticles.values
  );
  const singleArticle = useAppSelector(
    (state) => state.context.requests.singleArticle.values
  );

  useEffect(() => setArticle(singleArticle), [singleArticle]);

  useEffect(() => {
    if (articles.length == 0) {
      setArticleIdentifier({
        articleIdentifier: articleIdentifier as string,
      });
      singleArticleRequest();
    } else {
      setArticle(
        articles.find(
          (e) =>
            e.id === articleIdentifier || e.slug === `/${articleIdentifier}`
        ) as Article
      );
    }
  }, [articleIdentifier, articles, setArticleIdentifier, singleArticleRequest]);

  return (
    <>
      <Head>
        <title>
          {t('pages.article.pageTitle', {
            articleTitle: article ? article.title : '',
          })}
        </title>
      </Head>
      <ContentPageLayout
        label={article && article.label}
        title={article && article.title}
      >
        {loading ? (
          <PageSection centered verticalPadding="large">
            <Spinner />
          </PageSection>
        ) : error ? (
          <PageSection centered verticalPadding="large">
            <Typography color="error" level="7" type="heading">
              {t('pages.articles.errorFetchingArticle')}
            </Typography>
          </PageSection>
        ) : (
          renderContentOf(article)
        )}
      </ContentPageLayout>
    </>
  );
};

const renderContentOf = (article: Article | undefined) => {
  const contents: React.ReactNode[] = [];
  if (article && article.contents) {
    {
      article.contents.map((contentBlock, index) =>
        contents.push(
          <PageSection>
            <ContentBlock title={contentBlock.title} scale="large" key={index}>
              <ContentWithPimcore>{contentBlock.content}</ContentWithPimcore>
            </ContentBlock>
          </PageSection>
        )
      );
    }
  }
  return contents;
};
