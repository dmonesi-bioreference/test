import { rest } from 'msw';

import { Mocks } from './mocks';

export interface ArticleQuery {
  articles: Array<Article>;
}

export const handlers = [
  rest.get('/api/content/articles', (_request, response, context) =>
    response(context.status(200), context.json(Mocks.article.list))
  ),
  rest.get('/api/tests/*', (_request, response, context) =>
    response(context.status(200), context.json(Mocks.faqs.list))
  ),
  rest.get('/api/auth/me', (_request, response, context) =>
    response(context.status(200), context.json(Mocks.session.single))
  ),
];
