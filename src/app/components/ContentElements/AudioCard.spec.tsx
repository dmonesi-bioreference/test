import { renderWithShell, Mocks } from 'test-utils';

import { AudioCard } from './AudioCard';

describe('The audio card component', () => {
  it('does not explode', async () => {
    await renderWithShell(<AudioCard />);
  });

  it('creates audio card when test status is waiting', async () => {
    const page = await renderWithShell(<AudioCard />, {
      requests: {
        allAudios: async () => [
          Mocks.audios.create({
            introduceAt: 'WAITING',
            name: 'Waiting audio title',
          }),
        ],
      },
      onLoadTests: async () => [
        Mocks.tests.create({
          LabStatus: 'In Lab',
        }),
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Waiting audio title');
  });

  it('creates audio card when test status is ready', async () => {
    const page = await renderWithShell(<AudioCard />, {
      requests: {
        allAudios: async () => [
          Mocks.audios.create({
            introduceAt: 'READY',
            name: 'Results ready audio title',
          }),
        ],
      },
      onLoadTests: async () => [
        Mocks.tests.create({
          LabStatus: 'Report Ready',
        }),
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Results ready audio title');
  });

  it('creates audio card when test results have been viewed', async () => {
    const page = await renderWithShell(<AudioCard />, {
      requests: {
        allAudios: async () => [
          Mocks.audios.create({
            introduceAt: 'VIEWED',
            name: 'Viewed audio title',
          }),
        ],
      },
      onLoadTests: async () => [
        Mocks.tests.create({
          LabStatus: 'Report Ready',
        }),
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'at appointment',
      }),
    });

    await page.findByText('Viewed audio title');
  });

  it('creates audio card when test results have been discussed', async () => {
    const page = await renderWithShell(<AudioCard />, {
      requests: {
        allAudios: async () => [
          Mocks.audios.create({
            introduceAt: 'DISCUSSED',
            name: 'Discussed audio title',
          }),
        ],
      },
      onLoadTests: async () => [
        Mocks.tests.create({
          LabStatus: 'Report Ready',
        }),
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'after appointment',
      }),
    });

    await page.findByText('Discussed audio title');
  });
});
