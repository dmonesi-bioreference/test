import { renderWithShell, Mocks } from 'test-utils';

import { ArticleCards } from './ArticleCards';

describe('The article cards component', () => {
  it('does not explode', async () => {
    await renderWithShell(<ArticleCards />);
  });

  it('creates article cards when test status is waiting', async () => {
    const page = await renderWithShell(<ArticleCards />, {
      requests: {
        allArticles: async () => [
          Mocks.article.create({
            introduceAt: 'WAITING',
            title: 'Waiting article title',
          }),
        ],
      },
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
    const page = await renderWithShell(<ArticleCards />, {
      requests: {
        allArticles: async () => [
          Mocks.article.create({
            introduceAt: 'READY',
            title: 'Results ready article title',
          }),
        ],
      },
      onLoadTests: async () => [
        { ...Mocks.tests.single, LabStatus: 'Report Ready' },
      ],
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Results ready article title');
  });

  it('creates article cards when test results have been viewed', async () => {
    const page = await renderWithShell(<ArticleCards />, {
      requests: {
        allArticles: async () => [
          Mocks.article.create({
            introduceAt: 'VIEWED',
            title: 'Viewed article title',
          }),
        ],
      },
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
    const page = await renderWithShell(<ArticleCards />, {
      requests: {
        allArticles: async () => [
          Mocks.article.create({
            introduceAt: 'DISCUSSED',
            title: 'Discussed article title',
          }),
        ],
      },
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
