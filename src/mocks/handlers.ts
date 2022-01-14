import { rest } from 'msw';

import { mockArticle } from 'app/state/content/models';
import { mockTest } from 'app/state/tests/models';

export interface ArticleQuery {
  articles: Array<Article>;
}

export const handlers = [
  rest.get('/api/content/articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockArticle]));
  }),
  rest.get('/api/tests/*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockTest]));
  }),
];
