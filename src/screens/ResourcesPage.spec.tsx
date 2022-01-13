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
    const page = await renderWithShell(<ResourcesPage />);

    await page.findByText('Read');
    await page.findByText('Preparing For Results (Mock Article)');
    await page.findByText('What to expect from the test results');
    await page.findByText(
      'A genetic test report contains a lot of important information. We’ll break down the key terms for you so you can understand them better.'
    );
  });
});
