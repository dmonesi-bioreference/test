import * as TestUtils from 'test-utils';

import { Home } from './Home';

describe('Home', () => {
  it('displays the login page if there is no session or guid', async () => {
    const page = await TestUtils.roles.auth.visitor(<Home />);

    await page.findByText('Login');
  });

  it('displays the email identity page for email registrants', async () => {
    const page = await TestUtils.roles.auth.emailRegistration(<Home />);

    await page.findByText('Your Email Address');
  });

  it('displays the mobile number identity page for sms registrants', async () => {
    const page = await TestUtils.roles.auth.smsRegistration(<Home />);

    await page.findByText('Your Mobile Phone');
  });

  it('prefills submitted information', async () => {
    const page = await TestUtils.renderWithShell(<Home />, {
      onPatientGuid: async () => {
        return { guid: '1234', source: 'blah' };
      },
    });

    await page.findByText('Patient');
  });
});
