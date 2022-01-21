import { rest } from 'msw';

import { Mocks, server } from 'test-utils';

import { Content } from './content';

describe('Content.articles', () => {
  it('calls the article api', async () => {
    server.use(
      rest.get('/api/content/articles', (request, response, context) => {
        return response(context.status(200), context.json(Mocks.article.list));
      })
    );

    const response = await Content.articles();

    expect(response).toEqual(Mocks.article.list);
  });
});

describe('Content.article', () => {
  it('calls the article api with an articleId', async () => {
    const articleId = '1234';
    const listener = jest.fn();

    server.use(
      rest.get(
        '/api/content/articles/:articleId',
        (request, response, context) => {
          listener(request.params.articleId);
          return response(
            context.status(200),
            context.json(Mocks.article.single)
          );
        }
      )
    );

    const response = await Content.article({
      content: { currentArticleId: articleId },
    } as any);

    expect(listener).toHaveBeenCalledWith(articleId);
    expect(response).toEqual(Mocks.article.single);
  });
});

describe('Content.faqs', () => {
  it('calls the faqs api', async () => {
    server.use(
      rest.get('/api/content/faqs', (request, response, context) => {
        return response(context.status(200), context.json(Mocks.faqs.list));
      })
    );

    const response = await Content.faqs();

    expect(response).toEqual(Mocks.faqs.list);
  });
});
