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
  it('calls the article api with an article url slug', async () => {
    const articleUrlSlug = 'a-url';
    const listener = jest.fn();

    server.use(
      rest.get(
        '/api/content/articles/:articleUrlSlug',
        (request, response, context) => {
          listener(request.params.articleUrlSlug);
          return response(
            context.status(200),
            context.json(Mocks.article.single)
          );
        }
      )
    );

    const response = await Content.article({
      content: { currentArticleIdentifier: articleUrlSlug },
    } as any);

    expect(listener).toHaveBeenCalledWith(articleUrlSlug);
    expect(response).toEqual(Mocks.article.single);
  });

  it('calls the article api with an article id', async () => {
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
      content: { currentArticleIdentifier: articleId },
    } as any);

    expect(listener).toHaveBeenCalledWith(articleId);
    expect(response).toEqual(Mocks.article.single);
  });
});

describe('Content.audios', () => {
  it('calls the audios api', async () => {
    server.use(
      rest.get('/api/content/audios', (request, response, context) => {
        return response(context.status(200), context.json(Mocks.audios.list));
      })
    );

    const response = await Content.audios();

    expect(response).toEqual(Mocks.audios.list);
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

describe('Content.internalLinkCards', () => {
  it('calls the internal link cards api', async () => {
    server.use(
      rest.get('/api/content/internalLinkCards', (request, response, context) => {
        return response(context.status(200), context.json(Mocks.internalLinkCards.list));
      })
    );

    const  response = await Content.internalLinkCards();

    expect(response).toEqual(Mocks.internalLinkCards.list);
  });
});