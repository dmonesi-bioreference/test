import userEvents from '@testing-library/user-event';

import { Mocks, renderWithShell } from 'test-utils';

import { ResultsReady } from './ResultsReady';

describe('The results ready page', () => {
  it('does not explode', async () => {
    await renderWithShell(<ResultsReady />);
  });

  describe('The report section', () => {
    it('displays medical language ahead warning with a collapsed accordion', async () => {
      const page = await renderWithShell(<ResultsReady />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      });

      await page.findByText('Medical language ahead');

      userEvents.click(await page.findByText('Medical language ahead'));

      await page.findByText(
        'This report is designed with health care providers in mind and contains many medically-oriented details.'
      );
      await page.findByText(
        'For some people, receiving test results can be difficult to understand and may cause anxiety, regardless of the results.'
      );
      await page.findByText(
        'Genetic test reports have some limitations that are important to undertstand, therefore reviewing results with a doctor is necessary to properly understand and plan next steps.'
      );
    });

    it('has the spinner indicator when report is loading', async () => {
      const page = await renderWithShell(<ResultsReady />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
        onReport: async () => await new Promise((resolve) => setTimeout(resolve, 10_000_000)),
      });

      await page.findByTestId('spinner-report');
    });

    it('shown the "Open PDF" button when report is loaded', async () => {
      window.URL.revokeObjectURL = jest.fn();

      const pdfBuffer = await Mocks.report.get();
  
      const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' });
      
      const page = await renderWithShell(<ResultsReady />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
        onReport: async () => pdfBlob
      });

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
              feature: 'RESULT',
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
