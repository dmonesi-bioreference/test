import * as TestUtils from 'test-utils';

import { Home } from './Home';

describe('Home', () => {
  it('displays the login page if there is no session or guid', async () => {
    const page = await TestUtils.renderWithShell(<Home />, {
      onSession: async () => Promise.reject('No session'),
      onPatientGuid: async () => Promise.reject('401 Unauthorized'),
    });

    await page.findByText('Login');
  });

  it('displays the registration page for visitors with a guid', async () => {
    const page = await TestUtils.renderWithShell(<Home />, {
      onPatientGuid: async () => {
        return { guid: '1234', source: 'blah' };
      },
    });

    await page.findByText('Patient');
  });
});
