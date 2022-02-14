import { Mocks, renderWithShell } from 'test-utils';

import { ResultsReady } from './ResultsReady';

describe('The results ready page', () => {
  it('does not explode', async () => {
    await renderWithShell(<ResultsReady />);
  });

  describe('The details section', () => {
    it('has the report', async () => {
      const page = await renderWithShell(<ResultsReady />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
        onReport: async () => ({ src: '', thumbnail: '' }),
      });

      await page.findByText('Medical language ahead');
      await page.findByText(
        'This report is designed with health care providers in mind and contains many medically-oriented details. Talk to your provider to understand what the results mean for your family.'
      );
      await page.findByText('Open PDF');
    });
  });

  describe('The article section', () => {
    it('displays articles relevant to test status and results', async () => {
      const page = await renderWithShell(<ResultsReady />, {
        requests: {
          allArticles: async () => [
            Mocks.article.create({
              introduceAt: 'WAITING',
              title: 'Waiting community article',
              feature: 'COMMUNITY',
            }),
            Mocks.article.create({
              introduceAt: 'WAITING',
              title: 'Waiting results article',
              feature: 'RESULTS',
            }),
          ],
        },
        onLoadTests: async () =>
          Mocks.tests.createMany({
            DueDate: '2021-11-11T00:00:00.000',
            LabStatus: 'In Lab',
          }),
        onPatientGuid: async () => ({ guid: '1234', source: '' }),
      });

      await page.findByText('Read');
      await page.findByText('Waiting results article');
      expect(page.queryByText('Waiting community article')).toBeNull();
    });
  });
});
