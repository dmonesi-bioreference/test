import * as TestUtils from 'test-utils';

import { Home } from './Home';

describe('Home', () => {
  it('displays the login page if there is no guid', async () => {
    const page = await TestUtils.renderWithShell(<Home />, {
      onPatientGuid: async () => {
        return Promise.reject('401 Unauthorized');
      },
    });

    await page.findByText('Login');
  });

  it('displays the registration page for visitors with a guid', async () => {
    const page = await TestUtils.renderWithShell(<Home />, {
      onPatientGuid: async () => '1234',
    });

    await page.findByText("Child's name");
  });
});
