import { renderWithShell } from 'test-utils';

import { ArticlePage } from './ArticlePage';

describe('The article page', () => {
  it('does not explode', async () => {
    await renderWithShell(<ArticlePage />);
  });

  it('has the return to resources button', async () => {
    const page = await renderWithShell(
      <ArticlePage />
    );

    expect((await page.findByText('Return')).closest('a')).toHaveAttribute('href', '/demo/resources')
  });
});
