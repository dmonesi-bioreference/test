import { Mocks, renderWithShell } from 'test-utils';

import { TestResults } from './TestResults';

describe('The test results page', () => {
  it('does not explode', async () => {
    await renderWithShell(<TestResults />);
  });

  it('displays an error message then failed to fetch test results', async () => {
    const page = await renderWithShell(<TestResults />, {
      onLoadTests: async () => Promise.reject(),
    });

    await page.findByText('Error fetching test results');
  });

  it('displays a spinning indicator while loading tests', async () => {
    const page = await renderWithShell(<TestResults />, {
      onLoadTests: async () =>
        await new Promise((resolve) => setTimeout(resolve, 10_000_000)),
    });

    await page.findByTestId('spinner-testStatus');
  });

  it('shows the correct heading when waiting on test results', async () => {
    const page = await renderWithShell(<TestResults />, {
      onLoadTests: async () => Mocks.tests.createMany({ LabStatus: 'In Lab' }),
    });

    await page.findByText('Prepare to View Your Test Results');
  });

  it('shows the correct heading when test results ready', async () => {
    const page = await renderWithShell(<TestResults />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
    });

    await page.findByText('Your Full Test Results');
  });
});
