import { useEffect, useState } from 'react';

import { Content, useAppEvents, useAppSelector, useAppState, useAppTranslation } from 'app';
import { Button, Heading, Icon, PageLayout, Spinner, Typography } from 'components';

import ArticlePageStyled from './ArticlePage.styles';

interface ArticlePageProps {
  articleId?: string;
}

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
  const t = useAppTranslation();
  const events = useAppEvents();

  const [articleTitle, setArticleTitle] = useState<string>();
  const [articleContent, setArticleContent] = useState<string>();

  const articles = useAppSelector(
    (state) => state.context.content.articles.data
  );
  const loading = useAppState('content.articles.fetchingSingleArticle');
  const error = useAppState('content.articles.failure');

  useEffect(() => {
    const article = articles.find(e => e.id === props.articleId);
    setArticleTitle(article ? article.title : '');
    setArticleContent(article ? article.content : '');
  }, [articles, props]);

  useEffect(() => {
    if (!articleContent) {
      events.fetchSingleArticle({ articleId: props.articleId as string });
    }
  }, [articleContent, events, props]);

  return (
    <PageLayout containsCards={true} theme="resources">
      <ArticlePageStyled>
        <div className="results-ready__nav">
          <Button href="/demo/resources" prefix={<Icon name="chevron-left" />}>
            <Typography type="body">
              {t('pages.articles.return')}
            </Typography>
          </Button>
        </div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Typography color="error" level="7" type="heading">
            {t('pages.articles.errorFetchingArticle')}
          </Typography>
        ) : (
          articleContent && (
            <>
              <Heading level='1'>
                {articleTitle}
              </Heading>
              <Content>
                {articleContent}
              </Content>
            </>
          )
        )}
      </ArticlePageStyled>
    </PageLayout>
  );
};
