import { mockTest } from 'app/state/tests/models';
import { renderWithShell } from 'test-utils';

import { ResultsReady } from './ResultsReady';

describe('The results ready page', () => {
  it('does not explode', async () => {
    await renderWithShell(<ResultsReady />);
  });

  describe('The details section', () => {
    it('has te correct heading', async () => {
      const page = await renderWithShell(<ResultsReady />);

      await page.findByText('Return Home');
      await page.findByText('Your Full Test Results');
    });

    it('has the report', async () => {
      const page = await renderWithShell(<ResultsReady />, {
        onLoadTests: async () => ([{ ...mockTest, LabStatus: 'Report Ready' }]),
        onReport: async () => ({ src: '', thumbnail: '' })
      });

      await page.findByText('Medical language ahead');
      await page.findByText('This report is designed with health care providers in mind and contains many medically-oriented details. Talk to your provider to understand what the results mean for your family.');
      await page.findByText('Open PDF');
    });
  });
});
