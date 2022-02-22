import { renderWithShell, Mocks } from 'test-utils';

import { TestStatus } from './TestStatus';

describe('The test status component', () => {
  it('does not explode', async () => {
    await renderWithShell(<TestStatus />);
  });

  it('displays a spinning indicator while loading', async () => {
    const page = await renderWithShell(<TestStatus />, {
      onLoadTests: async () =>
        await new Promise((resolve) => setTimeout(resolve, 10_000_000)),
    });

    await page.findByTestId('spinner-testStatus');
  });

  it('shows waiting for results with no expected date', async () => {
    const page = await renderWithShell(<TestStatus />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ DueDate: undefined, LabStatus: 'In Lab' }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Test in progress');
    await page.findByText(
      'Check back to see when your results should be ready.'
    );
    await page.findByText('Please keep in mind that processing time may vary.');
  });

  it('shows waiting for results with expected date', async () => {
    const page = await renderWithShell(<TestStatus />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({
          DueDate: '2021-11-11T00:00:00.000',
          LabStatus: 'In Lab',
        }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Test in progress');
    await page.findByText('Results expected Nov 11, 2021');
    await page.findByText('Please keep in mind that processing time may vary.');
  });

  it('has test results ready', async () => {
    const page = await renderWithShell(<TestStatus />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Results Ready');
    await page.findByText('and shared with your healthcare provider.');
    await page.findByText(
      'Your healthcare provider will soon arrange an appointment to discuss them with you.'
    );
  });

  it('has test results ready and user at appointment', async () => {
    const page = await renderWithShell(<TestStatus />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'at appointment',
      }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Results Ready');
    await page.findByText('and shared with your healthcare provider.');
    await page.findByText(
      'Your healthcare provider will soon arrange an appointment to discuss them with you.'
    );
  });

  it('has test results ready and user after appointment', async () => {
    const page = await renderWithShell(<TestStatus />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'after appointment',
      }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Results Ready');
    await page.findByText('and shared with your healthcare provider.');
    await page.findByText(
      'Your healthcare provider will soon arrange an appointment to discuss them with you.'
    );
  });
});
