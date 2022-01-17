import { renderWithShell } from 'test-utils';

import { Content } from './Content';

describe('The content element component', () => {
  it('does not explode', async () => {
    await renderWithShell(<Content></Content>);
  });

  it('renders <p>', async () => {
    const page = await renderWithShell(
      <Content>
        {`
          <p>Hello world</p>
          <p>This is testing</p>
        `}
      </Content>
    );

    await page.findByText('Hello world');
    await page.findByText('This is testing');
  });
});
