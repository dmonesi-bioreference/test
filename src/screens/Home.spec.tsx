import userEvents from '@testing-library/user-event';

import * as TestUtils from 'test-utils';

import { Home } from './Home';

describe('Home', () => {
  it('displays the login page if there is no session or guid', async () => {
    const page = await TestUtils.roles.auth.visitor(<Home />);

    await page.findByText('Login');
  });

  it('has a primary action to begin registration', async () => {
    const page = await TestUtils.roles.auth.emailRegistration(<Home />);

    await page.findByText('Begin Registration');
  });

  it('displays the email identity page for email registrants', async () => {
    const page = await TestUtils.roles.auth.emailRegistration(<Home />);
    userEvents.click(await page.findByText('Begin Registration'));

    await page.findByText('Your Email Address');
  });

  it('displays the mobile number identity page for sms registrants', async () => {
    const page = await TestUtils.roles.auth.smsRegistration(<Home />);
    userEvents.click(await page.findByText('Begin Registration'));

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
