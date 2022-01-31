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
  const events = useAppEvents();

  const [articleTitle, setArticleTitle] = useState<string>();
  const [articleContents, setArticleContents] = useState<
    { title: string; content: string }[]
  >([]);
  const [articleLabel, setArticleLabel] = useState<string>();

  const articles = useAppSelector(
    (state) => state.context.content.articles.data
  );
  const loading = useAppState('content.articles.fetchingSingleArticle');
  const error = useAppState('content.articles.failure');

  useEffect(() => {
    const article = articles.find(
      (e) =>
        e.id === props.articleIdentifier ||
        e.slug === `/${props.articleIdentifier}`
    );
    setArticleTitle(article ? article.title : '');
    setArticleLabel(article ? article.label : '');
    setArticleContents(
      article && article.contents
        ? article.contents.map((e) => ({ title: e.title, content: e.content }))
        : []
    );
  }, [articles, props]);

  useEffect(() => {
    if (articleContents.length == 0) {
      events.fetchSingleArticle({
        articleIdentifier: props.articleIdentifier as string,
      });
    }
  }, [articleContents, events, props]);

  return (
    <PageLayout theme="resourcesTheme">
      <ContentPageStyled>
        <ReturnLink label="Return" href="/demo/resources" />
        <PageSection
          header={
            <div style={{ marginBottom: tokens.spacingXSmall }}>
              <div style={{ marginBottom: tokens.spacingXSmall }}>
                <Typography type="label" labelType="title" color="blue">
                  {articleLabel}
                </Typography>
              </div>
              <Heading level="1">{articleTitle}</Heading>
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
            articleContents && (
              <>
                {articleContents.map((contentBlock, index) => (
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
  );
};
