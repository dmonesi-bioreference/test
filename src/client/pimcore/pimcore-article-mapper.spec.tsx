import { transformToArticles } from './pimcore-article-mapper';

describe('Pimcore article mapper', () => {
  it('transforms response to Articles', async () => {
    const pimcoreResponse = {
      getArticleListing: {
        edges: [
          {
            node: {
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
            },
          },
          {
            node: {
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
            },
          },
        ],
      },
    };
    const articles = transformToArticles(pimcoreResponse);
    expect(articles[0].title).toEqual('Title 1');
    expect(articles[1].title).toEqual('Title 2');
  });
});
