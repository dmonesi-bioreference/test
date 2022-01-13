import { rest } from 'msw';

import { mockArticle } from 'app/state/content/models';

export interface ArticleQuery {
  articles: Array<Article>;
}

export const handlers = [
  rest.get('/api/content/articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockArticle]));
  }),
];
