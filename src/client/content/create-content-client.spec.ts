/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DefaultRequestBody, RequestParams, rest, RestRequest } from 'msw';

import { server } from 'test-utils';

import { createContentClient } from './create-content-client';

const config = {
  pimcore: { key: '12345' },
  services: { content: 'http://localhost', provider: '' },
};

const { client, handlers } = createContentClient(config);

describe('Client', () => {
  it('adds an api key to all http requests', async () => {
    let givenRequest = {} as RestRequest<DefaultRequestBody, RequestParams>;

    server.use(
      rest.post('/graphql', (request, response, context) => {
        givenRequest = request;
        return response(context.status(200), context.json({}));
      })
    );

    await client.post('/graphql', {});

    expect(new URLSearchParams(givenRequest.url.search).get('apikey')).toEqual(
      config.pimcore.key
    );
  });
});

describe('Handlers', () => {
  it('.article(articleId) maps the given payload into an article', async () => {
    let givenRequest = {} as RestRequest<DefaultRequestBody, RequestParams>;
    const article = {
      id: '1',
      bannerImage: {
        id: '',
        filename: '',
        fullpath: '',
        mimetype: '',
        type: '',
      },
      label: '',
      title: 'Title 1',
      blurb: '',
      content: '',
      slug: { slug: 'slug' },
      published: 1,
      reviewByDate: 1,
      owner: '',
      introduceAt: 'WAITING' as IntroduceAt,
    };

    server.use(
      rest.post('/gdx-webservices/patient', (request, response, context) => {
        givenRequest = request;
        return response(
          context.status(200),
          context.json({ data: { getArticle: article } })
        );
      })
    );

    const result = await handlers.article('1234');

    expect(result).toEqual(article);

    // @ts-ignore
    expect(givenRequest.body?.query).toContain('getArticle(id: 1234)');
  });

  it('.articles() maps the given payload into a list of articles', async () => {
    const articleOne = {
      id: '1',
      bannerImage: {
        id: '',
        filename: '',
        fullpath: '',
        mimetype: '',
        type: '',
      },
      label: '',
      title: 'Title 1',
      blurb: '',
      content: '',
      slug: { slug: 'slug' },
      published: 1,
      reviewByDate: 1,
      owner: '',
      introduceAt: 'WAITING' as IntroduceAt,
    };

    const articleTwo = {
      id: '1',
      bannerImage: {
        id: '',
        filename: '',
        fullpath: '',
        mimetype: '',
        type: '',
      },
      label: '',
      title: 'Title 2',
      blurb: '',
      content: '',
      slug: { slug: 'slug' },
      published: 1,
      reviewByDate: 1,
      owner: '',
      introduceAt: 'WAITING' as IntroduceAt,
    };

    server.use(
      rest.post('/gdx-webservices/patient', (request, response, context) => {
        return response(
          context.status(200),
          context.json({
            data: {
              getArticleListing: {
                edges: [{ node: articleOne }, { node: articleTwo }],
              },
            },
          })
        );
      })
    );

    const result = await handlers.articles();

    expect(result).toEqual([articleOne, articleTwo]);
  });

  it('.faqs() maps the given payload into a list of faqs', async () => {
    const faqOne = {
      id: '1',
      slug: { slug: 'slug' },
      label: 'label',
      title: 'Title 1',
      blurb: 'blurb',
      content: 'content',
      bannerImage: {
        id: '',
        filename: '',
        fullpath: '',
        mimetype: '',
        type: '',
      },
      author: '',
      introduceAt: 'WAITING' as IntroduceAt,
    };

    const faqTwo = {
      id: '1',
      slug: { slug: 'slug' },
      label: 'label',
      title: 'Title 2',
      blurb: 'blurb',
      content: 'content',
      bannerImage: {
        id: '',
        filename: '',
        fullpath: '',
        mimetype: '',
        type: '',
      },
      author: '',
      introduceAt: 'WAITING' as IntroduceAt,
    };

    server.use(
      rest.post('/gdx-webservices/patient', (request, response, context) => {
        return response(
          context.status(200),
          context.json({
            data: {
              getPatientFAQListing: {
                edges: [{ node: faqOne }, { node: faqTwo }],
              },
            },
          })
        );
      })
    );

    const result = await handlers.faqs();

    expect(result).toEqual([faqOne, faqTwo]);
  });
});
