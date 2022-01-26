import { ResourcesPage } from 'screens';
import { renderWithShell, Mocks } from 'test-utils';

import { Articles } from './Articles';

describe('The articles element component', () => {
  it('does not explode', async () => {
    await renderWithShell(<Articles />);
  });

  it('creates article cards when test status is waiting', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      onFetchAllArticles: async () => [
        {
          ...Mocks.article.single,
          introduceAt: 'WAITING',
          title: 'Waiting article title',
        },
      ],
      onLoadTests: async () => [
        {
          ...Mocks.tests.single,
          DueDate: '2021-11-11T00:00:00.000',
          LabStatus: 'In Lab',
        },
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Waiting article title');
  });

  it('creates article cards when test status is ready', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      onFetchAllArticles: async () => [
        {
          ...Mocks.article.single,
          introduceAt: 'READY',
          title: 'Results ready article title',
        },
      ],
      onLoadTests: async () => [
        { ...Mocks.tests.single, LabStatus: 'Report Ready' },
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Results ready article title');
  });

  it('creates article cards when test results have been viewed', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      onFetchAllArticles: async () => [
        {
          ...Mocks.article.single,
          introduceAt: 'VIEWED',
          title: 'Viewed article title',
        },
      ],
      onLoadTests: async () => [
        { ...Mocks.tests.single, LabStatus: 'Report Ready' },
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'at appointment',
      }),
    });

    await page.findByText('Viewed article title');
  });

  it('creates article cards when test results have been discussed', async () => {
    const page = await renderWithShell(<ResourcesPage />, {
      onFetchAllArticles: async () => [
        {
          ...Mocks.article.single,
          introduceAt: 'DISCUSSED',
          title: 'Discussed article title',
        },
      ],
      onLoadTests: async () => [
        { ...Mocks.tests.single, LabStatus: 'Report Ready' },
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'after appointment',
      }),
    });

    await page.findByText('Discussed article title');
  });
});
