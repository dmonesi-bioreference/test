import * as TestUtils from 'test-utils';

import { Home } from './Home';

describe('Home', () => {
  it('displays the landing page when we have a valid session', async () => {
    const page = await TestUtils.renderWithShell(<Home />);

    await page.findByText("Child's name");
  });
});
