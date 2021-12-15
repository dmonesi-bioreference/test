import { renderWithShell } from 'test-utils';

import Avatar from './Avatar';

describe('The Avatar component', () => {
  it('contains an image with alt text', async () => {
    const page = await renderWithShell(
      <Avatar
        alt="Photograph of our genetic counselor, Laura."
        shape="square"
        size="large"
      />
    );

    await page.findByAltText('Photograph of our genetic counselor, Laura.');
  });
});
