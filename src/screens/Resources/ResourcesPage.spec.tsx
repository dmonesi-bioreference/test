import { renderWithShell, Mocks } from 'test-utils';

import { ResourcesPage } from './ResourcesPage';

describe('The resources page', () => {
  it('does not explode', async () => {
    await renderWithShell(<ResourcesPage />);
  });

  it('has a header', async () => {
    const page = await renderWithShell(<ResourcesPage />);
    expect(page.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Resources'
    );
  });

  it('has an audio section', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      requests: { allAudios: async () => Mocks.audios.list },
    });

    await page.findByText('Genetic counselor support', { exact: false });
    await page.findByText('This is the transcript', { exact: false });
    await page.findByText('Read transcript');
  });

  it('has an article section', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      requests: { allArticles: async () => Mocks.article.list },
    });

    await page.findByText('Read');
    await page.findByText('Preparing For Results (Mock Article)');
    await page.findByText('What to expect from the test results');
    await page.findByText(
      "A genetic test report contains a lot of important information. We'll break down the key terms for you so you can understand them better."
    );
  });

  it('has a faqs section', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      requests: { allFaqs: async () => Mocks.faqs.list },
    });

    await page.findByText('What is Genetic Testing?');
    await page.findAllByText('blurb');
    await page.findAllByText('Title');
  });
});
