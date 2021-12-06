import { graphql } from 'msw';

import { Article } from 'app';

export interface ArticleQuery {
  articles: Array<Article>;
}

export const handlers = [
  // Handles a "GetTestStatusArticles" query
  graphql.query<ArticleQuery>('GetTestStatusArticles', (req, res, ctx) => {
    return res(
      ctx.data({
        articles: [
          {
            id: '1',
            title:
              'How other parents have coped with this time of uncertainty.',
            content: [
              'They said it was supposed to be the most wonderful experience of my life.',
            ],
          },
        ],
      })
    );
  }),
];
