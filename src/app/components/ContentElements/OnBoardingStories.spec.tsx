import { Mocks, renderWithShell } from 'test-utils';

import { OnBoardingStories } from './OnBoardingStories';

describe('The on-boarding stories carousel component', () => {
  it('does not explode', async () => {
    await renderWithShell(<OnBoardingStories />);
  });

  it('render on-boarding cards', async () => {
    const page = await renderWithShell(<OnBoardingStories />, {
      requests: { allOnBoardingCards: async () => Mocks.onBoardingCards.list },
    });

    await page.findAllByText('Results & Resources');
    await page.findAllByText('View and learn about the genetic test results.');
    await page.findAllByText(
      'We provide you with easy access to your child’s genetic test results',
      { exact: false }
    );
    await page.findAllByText('Records');
    await page.findAllByText('Results & Resources');
    await page.findAllByText('Keep all records in one place.');
    await page.findAllByText('Along with your child’s genetic test results', {
      exact: false,
    });
  });
});
