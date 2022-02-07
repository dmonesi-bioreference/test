import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import {
  Content,
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app';
import {
  ContentBlock,
  Heading,
  PageLayout,
  PageSection,
  ReturnLink,
  Spinner,
  Typography,
} from 'components';
import { tokens } from 'styles';

import ContentPageStyled from './ContentPage.styles';

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
  const articles = useAppSelector(state => state.context.requests.allArticles.values);
  const singleArticle = useAppSelector(state => state.context.requests.singleArticle.values);

  useEffect(() => setArticle(singleArticle), [singleArticle]);

  useEffect(() => {
    if (articles.length == 0) {
      setArticleIdentifier({
        articleIdentifier: articleIdentifier as string,
      });
      singleArticleRequest();
    }
    else {
      setArticle(
        articles.find(
          (e) =>
            e.id === articleIdentifier ||
            e.slug === `/${articleIdentifier}`
        ) as Article
      );
    }
  }, [articleIdentifier, articles, setArticleIdentifier, singleArticleRequest]);

  return (
    <>
      <Head>
        <title>{t('pages.article.pageTitle', { articleTitle: article ? article.title : '' })}</title>
      </Head>
      <PageLayout theme="resourcesTheme">
        <ContentPageStyled>
          <ReturnLink label="Return" href="/demo/resources" />
          <PageSection
            header={
              <div style={{ marginBottom: tokens.spacingXSmall }}>
                <div style={{ marginBottom: tokens.spacingXSmall }}>
                  <Typography type="label" labelType="title" color="blue">
                    {article ? article.label : ''}
                  </Typography>
                </div>
                <Heading level="1">{article ? article.title : ''}</Heading>
              </div>
            }
          >
            {loading ? (
              <Spinner />
            ) : error ? (
              <Typography color="error" level="7" type="heading">
                {t('pages.articles.errorFetchingArticle')}
              </Typography>
            ) : (
              article && article.contents && (
                <>
                  {article.contents.map((contentBlock, index) => (
                    <React.Fragment key={index}>
                      <ContentBlock title={contentBlock.title}>
                        <Content>{contentBlock.content}</Content>
                      </ContentBlock>
                    </React.Fragment>
                  ))}
                </>
              )
            )}
          </PageSection>
        </ContentPageStyled>
      </PageLayout>
    </>
  );
};
