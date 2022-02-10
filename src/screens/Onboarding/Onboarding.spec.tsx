import { renderWithShell } from 'test-utils';

import { OnBoarding } from './index';

describe('The pre registration on-boarding page', () => {
  it('does not explode', async () => {
    await renderWithShell(<OnBoarding />);
  });

  it('has a primary action to begin registration', async () => {
    const page = await renderWithShell(<OnBoarding />);

    await page.findByText('Begin Registration');
  });
});
