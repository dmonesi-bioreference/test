import React, { useEffect, useState } from 'react';

import {
  Content,
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app';
import {
  Heading,
  PageLayout,
  ReturnLink,
  Spinner,
  Typography,
} from 'components';

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

  const articles = useAppSelector(
    (state) => state.context.content.articles.data
  );
  const loading = useAppState('content.articles.fetchingSingleArticle');
  const error = useAppState('content.articles.failure');

  useEffect(() => {
    const article = articles.find((e) => e.id === props.articleIdentifier || e.slug === `/${props.articleIdentifier}`);
    setArticleTitle(article ? article.title : '');
    setArticleContents(
      article?.contents?.map((e) => ({ title: e.title, content: e.content })) ??
        []
    );
  }, [articles, props]);

  useEffect(() => {
    if (articleContents.length == 0) {
      events.fetchSingleArticle({ articleIdentifier: props.articleIdentifier as string });
    }
  }, [articleContents, events, props]);

  return (
    <PageLayout containsCards={true} theme="resourcesTheme">
      <ContentPageStyled>
        <ReturnLink label="Return" href="/demo/resources" />
        {loading ? (
          <Spinner />
        ) : error ? (
          <Typography color="error" level="7" type="heading">
            {t('pages.articles.errorFetchingArticle')}
          </Typography>
        ) : (
          articleContents && (
            <>
              <Heading level="1">{articleTitle}</Heading>
              {articleContents.map((contentBlock, index) => (
                <React.Fragment key={index}>
                  <Heading level="2">{contentBlock.title}</Heading>
                  <Content>{contentBlock.content}</Content>
                </React.Fragment>
              ))}
            </>
          )
        )}
      </ContentPageStyled>
    </PageLayout>
  );
};
