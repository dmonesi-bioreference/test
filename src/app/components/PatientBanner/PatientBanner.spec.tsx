import * as TestUtils from 'test-utils';

import { PatientBanner } from './PatientBanner';

describe('PatientBanner', () => {
  it('displays the patient name with label', async () => {
    const name = 'An Example Name';
    const component = await TestUtils.renderWithShell(<PatientBanner />, {
      requests: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        identityProfile: async () => ({ patient_name: name } as any),
      },
    });

    await component.findByText(name);
    await component.findByText('Patient');
  });

  it('displays an async requesting message while fetching', async () => {
    const component = await TestUtils.renderWithShell(<PatientBanner />, {
      requests: {
        identityProfile: async () => {
          await new Promise((resolve) => setTimeout(resolve, 10_000_000));
          return Promise.reject('no profile');
        },
      },
    });

    await component.findByText('Retrieving patient profile');
  });
});
