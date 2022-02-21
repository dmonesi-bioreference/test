import { renderWithShell, Mocks } from 'test-utils';

import { Timeline } from './Timeline';

describe('The timeline componet', () => {
  it('does not explode', async () => {
    await renderWithShell(<Timeline />);
  });

  it('displays a spinning indicator while loading', async () => {
    const page = await renderWithShell(<Timeline />, {
      onLoadTests: async () =>
        await new Promise((resolve) => setTimeout(resolve, 10_000_000)),
    });

    await page.findByTestId('spinner-timeline');
  });

  it('displays correctly', async () => {
    const app = await renderWithShell(<Timeline />);

    await app.findByText('Your Timeline');
  });

  it('has current stage body visible by default', async () => {
    const app = await renderWithShell(<Timeline />, {
      onLoadTests: async () => Mocks.tests.createMany({ LabStatus: 'In Lab' }),
    });

    // Button text visible in body of Waiting should exist
    await app.findByText('View resources');

    // Text only found in "After your appointment" should not exist yet
    expect(
      app.queryByText('You may also have a follow up discussion')
    ).toBeNull();
  });

  it('shows past items with smaller headline', async () => {
    const app = await renderWithShell(<Timeline />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
    });
    const pastHeadline = await app.findByText('Waiting for Results');
    expect(pastHeadline).toHaveStyle('font-size: 0.875rem');
  });

  it('shows waiting for results', async () => {
    const page = await renderWithShell(<Timeline />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({
          DueDate: '2021-11-11T00:00:00.000',
          LabStatus: 'In Lab',
        }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText(
      "We're working on processing your test sample. You can check out these resources while you're waiting."
    );
    await page.findByText('View resources');
  });

  it('has test results ready', async () => {
    const page = await renderWithShell(<Timeline />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
    });

    await page.findByText(
      'When your test results are ready, your doctor will arrange an appointment to discuss the results with you.'
    );
    await page.findByText('Prepare for your appointment');
  });

  it('has test results ready and user at appointment', async () => {
    const page = await renderWithShell(<Timeline />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'at appointment',
      }),
    });

    await page.findByText(
      'You will be able to discuss the results with your doctor and ask any questions you have.'
    );
  });

  it('has test results ready and user after appointment', async () => {
    const page = await renderWithShell(<Timeline />, {
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'after appointment',
      }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText(
      'You may also have a follow up discussion with a genetic counselor, a healthcare professional with expertise in genetics.'
    );
    await page.findByText('Support & resources');
  });
});
