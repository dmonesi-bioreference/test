import { renderWithShell, Mocks } from 'test-utils';

import { LandingPage } from './LandingPage';

describe('The home page', () => {
  const today = new Date();

  it('does not explode', async () => {
    await renderWithShell(<LandingPage />);
  });

  describe('results section', () => {
    it("features the patient's name", async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('Patient');
      await page.findByText('Lisa Consuela Jackson');
    });

    it('has test results on waiting', async () => {
      const page = await renderWithShell(<LandingPage />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({
            DueDate: '2021-11-11T00:00:00.000',
            LabStatus: 'In Lab',
            UpdatedDate: `${today.getFullYear()}-${
              today.getMonth() + 1 < 10 ? '0' : ''
            }${today.getMonth() + 1}-${
              today.getDate() < 10 ? '0' : ''
            }${today.getDate()}T11:12:00.000`,
          }),
        onPatientGuid: async () => ({ guid: '1234', source: '' }),
      });

      await page.findByText('Test in progress');
      await page.findByText('Results expected Nov 11, 2021');
      await page.findByText(
        'Please keep in mind that processing time may vary.'
      );
      await page.findByText('Updated 11:12am today');

      await page.findByText(
        "We're working on processing your test sample. Meanwhile, let's get your health profile setup."
      );
      await page.findByText('Set up your Health Profile');
    });

    it('has test results ready', async () => {
      const page = await renderWithShell(<LandingPage />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({
            LabStatus: 'Report Ready',
            UpdatedDate: `${today.getFullYear()}-${
              today.getMonth() + 1 < 10 ? '0' : ''
            }${today.getMonth() + 1}-${
              today.getDate() < 10 ? '0' : ''
            }${today.getDate()}T11:12:00.000`,
          }),
        onPatientGuid: async () => ({ guid: '1234', source: '' }),
      });

      await page.findByText('Results Ready');
      await page.findByText('and shared with your doctor.');
      await page.findByText(
        'Your doctor will soon arrange an appointment to discuss them with you.'
      );
      await page.findByText('Updated 11:12am today');

      await page.findByText(
        'Now that your results are ready, your doctor will get in touch to arrange an appointment to discuss the results with you.'
      );
      await page.findByText('Prepare for your appointment');
    });

    it('has test results ready and user at appointment', async () => {
      const page = await renderWithShell(<LandingPage />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({
            LabStatus: 'Report Ready',
            UpdatedDate: `${today.getFullYear()}-${
              today.getMonth() + 1 < 10 ? '0' : ''
            }${today.getMonth() + 1}-${
              today.getDate() < 10 ? '0' : ''
            }${today.getDate()}T11:12:00.000`,
          }),
        onAppointmentStatus: async () => ({
          appointmentStatus: 'at appointment',
        }),
        onPatientGuid: async () => ({ guid: '1234', source: '' }),
      });

      await page.findByText('Results Ready');
      await page.findByText('and shared with your doctor.');
      await page.findByText(
        'Your doctor will soon arrange an appointment to discuss them with you.'
      );
      await page.findByText('Updated 11:12am today');

      await page.findByText(
        'You will be able to discuss he results with your doctor and ask any questions that you may have.'
      );
      await page.findByText("I've spoken with my doctor");
    });

    it('has test results ready and user after appointment', async () => {
      const page = await renderWithShell(<LandingPage />, {
        onLoadTests: async () =>
          Mocks.tests.createMany({
            LabStatus: 'Report Ready',
            UpdatedDate: `${today.getFullYear()}-${
              today.getMonth() + 1 < 10 ? '0' : ''
            }${today.getMonth() + 1}-${
              today.getDate() < 10 ? '0' : ''
            }${today.getDate()}T11:12:00.000`,
          }),
        onAppointmentStatus: async () => ({
          appointmentStatus: 'after appointment',
        }),
        onPatientGuid: async () => ({ guid: '1234', source: '' }),
      });

      await page.findByText('Results Ready');
      await page.findByText('and shared with your doctor.');
      await page.findByText(
        'Your doctor will soon arrange an appointment to discuss them with you.'
      );
      await page.findByText('Updated 11:12am today');

      await page.findByText(
        'You may also have a follow up discussion with a genetic counselor, a healthcare professional with expertise in genetics.'
      );
      await page.findByText("Focus on your child's care");
    });
  });

  describe('resources section', () => {
    it('has a title and copy', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('Resources');
      await page.findByText('(In the NICU)');
    });

    it('has a FAQ section', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('NICU FAQs');
      await page.findByText('How do I care for my baby after the NICU?');
      await page.findByText(
        "What happens if my child doesn't get a diagnosis?"
      );
      await page.findByText('Can I still have more children?');
      await page.findByText('View all');
    });
  });

  describe('care team section', () => {
    it('has a header, copy, and calls to action', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('Care team');
      await page.findByText('Call');
      await page.findByText('Talk to a Genetic Counselor');
      await page.findByText(
        'Find peace of mind and get your burning questions answered'
      );
      await page.findByText("Starting today, we're here for you");
      await page.findByText('Learn about genetic counselling');
    });
  });

  describe('science section', () => {
    it('has a title subsection titles', async () => {
      const page = await renderWithShell(<LandingPage />);

      await page.findByText('The science');
      await page.findByText('101 on Genetics');
      await page.findByText('Whole Genome Sequencing');
    });
  });
});
