import { within } from '@testing-library/dom';

import { Mocks, renderWithShell } from 'test-utils';

import { FAQCards } from './FAQCards';

describe('The faq card component', () => {
  it('does not explode', async () => {
    await renderWithShell(<FAQCards />);
  });

  it('renders highest priority FAQ card when test status is waiting', async () => {
    const page = await renderWithShell(<FAQCards />, {
      requests: {
        allFaqs: async () => [
          Mocks.faqs.create({
            id: '1',
            introduceAt: 'WAITING',
            title: 'Waiting FAQ - Low Priority',
            priority: 2,
            content: [{ title: 'Waiting FAQ - Low Priority', content: '' }],
          }),
          Mocks.faqs.create({
            id: '2',
            introduceAt: 'WAITING',
            title: 'Waiting FAQ - High Priority',
            priority: 1,
            content: [{ title: 'Waiting FAQ - High Priority', content: '' }],
          }),
        ],
      },
      onLoadTests: async () => Mocks.tests.createMany({ LabStatus: 'In Lab' }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    const [firstFAQSet, secondFAQSet] = page.getAllByRole('heading', {
      level: 3,
    });
    expect(
      within(firstFAQSet).getByText('Waiting FAQ - High Priority')
    ).toBeTruthy();
    expect(
      within(secondFAQSet).getByText('Waiting FAQ - Low Priority')
    ).toBeTruthy();
  });

  it('renders relevant FAQ card when test status is ready', async () => {
    const page = await renderWithShell(<FAQCards />, {
      requests: {
        allFaqs: async () => [
          Mocks.faqs.create({
            id: '1',
            introduceAt: 'WAITING',
            priority: 2,
            content: [{ title: 'Waiting FAQ - Low Priority', content: '' }],
          }),
          Mocks.faqs.create({
            id: '2',
            introduceAt: 'READY',
            priority: 1,
            content: [
              { title: 'Results Ready FAQ - High Priority', content: '' },
            ],
          }),
        ],
      },
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
    });

    await page.findByText('Results Ready FAQ - High Priority');
  });

  it('renders relevant FAQ card when results have been viewed', async () => {
    const page = await renderWithShell(<FAQCards />, {
      requests: {
        allFaqs: async () => [
          Mocks.faqs.create({
            id: '1',
            introduceAt: 'WAITING',
            priority: 2,
            content: [{ title: 'Waiting FAQ - Low Priority', content: '' }],
          }),
          Mocks.faqs.create({
            id: '2',
            introduceAt: 'VIEWED',
            priority: 1,
            content: [{ title: 'Viewed FAQ - High Priority', content: '' }],
          }),
        ],
      },
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'at appointment',
      }),
    });

    await page.findByText('Viewed FAQ - High Priority');
  });

  it('renders relevant FAQ card when test results have been discussed', async () => {
    const page = await renderWithShell(<FAQCards />, {
      requests: {
        allFaqs: async () => [
          Mocks.faqs.create({
            id: '1',
            introduceAt: 'WAITING',
            priority: 2,
            content: [{ title: 'Waiting FAQ - Low Priority', content: '' }],
          }),
          Mocks.faqs.create({
            id: '2',
            introduceAt: 'DISCUSSED',
            priority: 1,
            content: [{ title: 'Discussed FAQ - High Priority', content: '' }],
          }),
        ],
      },
      onLoadTests: async () =>
        Mocks.tests.createMany({ LabStatus: 'Report Ready' }),
      onPatientGuid: async () => ({ guid: '1234', source: '' }),
      onAppointmentStatus: async () => ({
        appointmentStatus: 'after appointment',
      }),
    });

    await page.findByText('Discussed FAQ - High Priority');
  });
});
