import { graphql } from 'msw';

import { Article, mockArticle } from 'app';

export interface ArticleQuery {
  articles: Array<Article>;
}

export const handlers = [
  // Handles a "GetTestStatusArticles" query
  graphql.query<ArticleQuery>('GetTestStatusArticles', (req, res, ctx) => {
    return res(
      ctx.data({
        articles: [mockArticle],
      })
    );
  }),
];
