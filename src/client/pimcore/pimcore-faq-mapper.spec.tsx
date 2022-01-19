import { transformToFAQs } from './pimcore-faq-mapper';

describe('Pimcore faq mapper', () => {
  it('transforms response to FAQs', async () => {
    const pimcoreResponse = {
      getPatientFAQListing: {
        edges: [
          {
            node: {
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
            },
          },
          {
            node: {
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
            },
          },
        ],
      },
    };
    const faqs = transformToFAQs(pimcoreResponse);
    expect(faqs[0].title).toEqual('Title 1');
    expect(faqs[1].title).toEqual('Title 2');
  });
});
