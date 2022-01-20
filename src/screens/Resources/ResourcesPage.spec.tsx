import { mockArticle, mockFAQs } from 'app/state/content/models';
import { renderWithShell } from 'test-utils';

import { ResourcesPage } from './ResourcesPage';

describe('The resources page', () => {
  it('does not explode', async () => {
    await renderWithShell(<ResourcesPage />);
  });

  it('has a header', async () => {
    const page = await renderWithShell(<ResourcesPage />);
    await page.findByText('Resources');
  });

  it('has an audio section', async () => {
    const page = await renderWithShell(<ResourcesPage />);

    await page.findByText('Genetic Counselor support', { exact: false });
    await page.findByText('Read transcript');
  });

  it('has an article section', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      onFetchAllArticles: async () => [mockArticle],
    });

    await page.findByText('Read');
    await page.findByText('Preparing For Results (Mock Article)');
    await page.findByText('What to expect from the test results');
    await page.findByText(
      'A genetic test report contains a lot of important information. We’ll break down the key terms for you so you can understand them better.'
    );
  });

  it('has a faqs section', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      onFetchAllFAQs: async () => mockFAQs,
    });

    await page.findByText('Genetic Testing FAQs');
    await page.findByText(
      'Here are some frequently asked questions about genetic testing:'
    );
    await page.findByText('What is Genetic Testing?');
    await page.findByText('What is DNA?');
  });
});