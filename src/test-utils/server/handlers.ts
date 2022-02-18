import * as fs from 'fs';
import * as path from 'path';

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
  rest.get('/genetic-test-report.pdf',
    (request, response, context) => {
      const pdfBuffer = fs.readFileSync(
        path.resolve(__dirname, './mocks/genetic-test-report.pdf'),
      );

      return response(
        context.set('Content-Length', pdfBuffer.byteLength.toString()),
        context.set('Content-Type', 'application/pdf'),
        context.body(pdfBuffer)
      );
    }
  )
];
