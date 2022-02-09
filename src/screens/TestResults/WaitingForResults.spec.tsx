import { Mocks, renderWithShell } from 'test-utils';

import { WaitingForResults } from './WaitingForResults';

describe('The waiting for results page', () => {
  it('does not explode', async () => {
    await renderWithShell(<WaitingForResults />);
  });

  describe('The indicator section', () => {
    it('has the correct heading', async () => {
      const page = await renderWithShell(<WaitingForResults />);

      await page.findByText('Prepare to View Your Test Results');
    });

    it('has the correct indicator', async () => {
      const page = await renderWithShell(<WaitingForResults />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({
            DueDate: '2021-11-11T00:00:00.000',
            LabStatus: 'In Lab',
          }),
        onPatientGuid: async () => ({ guid: '1234', source: '' }),
      });

      await page.findByText('Your genetic test is currently:');
      await page.findByText('In Progress');
      await page.findByText('Results expected Nov 11, 2021');
      await page.findByText(
        'You can prepare and learn about the results while you wait.'
      );
    });
  });

  describe('The article section', () => {
    it('displays articles relevant to test status and results', async () => {
      const page = await renderWithShell(<WaitingForResults />, {
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
