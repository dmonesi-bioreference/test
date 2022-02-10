import userEvents from '@testing-library/user-event';

import { renderWithShell, Mocks } from 'test-utils';

import { LandingPage } from './LandingPage';

describe('The home page', () => {
  const today = new Date();

  it('does not explode', async () => {
    await renderWithShell(<LandingPage />);
  });

  describe('results section', () => {
    it("features the patient's name", async () => {
      const name = 'Lisa Consuela Jackson';
      const page = await renderWithShell(<LandingPage />, {
        requests: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          identityProfile: async () => ({ patient_name: name } as any),
        },
      });

      await page.findByText('Patient');
      await page.findByText(name);
    });

    it('displays a spinning indicator while loading', async () => {
      const page = await renderWithShell(<LandingPage />, {
        onLoadTests: async () => {
          await new Promise((resolve) => setTimeout(resolve, 10_000_000));
          return Mocks.tests.createMany({
            DueDate: '2021-11-11T00:00:00.000',
            LabStatus: 'In Lab',
            UpdatedDate: `${today.getFullYear()}-${
              today.getMonth() + 1 < 10 ? '0' : ''
            }${today.getMonth() + 1}-${
              today.getDate() < 10 ? '0' : ''
            }${today.getDate()}T11:12:00.000`,
          });
        },
      });

      await page.findByTestId('spinner-testStatus');
      await page.findByTestId('spinner-timeline');
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
      // await page.findByText('Updated 11:12am today');

      await page.findByText(
        "We're working on processing your test sample. Meanwhile, learn more from our resources."
      );
      await page.findByText('Check out resources');
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
      // await page.findByText('Updated 11:12am today');

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
      // await page.findByText('Updated 11:12am today');

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
      // await page.findByText('Updated 11:12am today');

      await page.findByText(
        'You may also have a follow up discussion with a genetic counselor, a healthcare professional with expertise in genetics.'
      );
      await page.findByText('Focus on providing care');
    });
  });
  it('closes the menu when you click outside', async () => {
    const page = await renderWithShell(<LandingPage />);

    userEvents.click(await page.findByLabelText('Open menu'));
    await page.findByText('Home');

    userEvents.click(await page.findByText('Patient'));
    expect(page.queryByText('Home')).toBeNull();
  });
});
