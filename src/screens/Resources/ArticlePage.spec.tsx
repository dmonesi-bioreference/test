import { renderWithShell } from 'test-utils';
import { Mocks } from 'test-utils/server/mocks';

import { ArticlePage } from './ArticlePage';

describe('The article page', () => {
  it('does not explode', async () => {
    await renderWithShell(<ArticlePage />);
  });

  it('has a return link', async () => {
    const page = await renderWithShell(<ArticlePage />, {
      requests: {
        singleArticle: async () => Mocks.article.single,
      },
    });

    expect(await page.findByText('Return'));
  });
});
