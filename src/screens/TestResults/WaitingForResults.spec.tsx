import { mockTest } from 'app/state/tests/models';
import { renderWithShell } from 'test-utils';

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
        onLoadTests: async () => ([{ ...mockTest, DueDate: '2021-11-11T00:00:00.000', LabStatus: 'In Lab' }]),
        onPatientGuid: async () => ({ guid: '1234', source: '' }),
      });
      
      await page.findByText('Your genetic test is currently:');
      await page.findByText('In Progress');
      await page.findByText('Results expected Nov 11, 2021');
      await page.findByText('You can prepare and learn about the results while you wait.');
    });
  });
});
