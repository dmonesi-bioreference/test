import { renderWithShell } from 'test-utils';

import { Settings } from './index';

describe('The Settings Page', () => {
  it('does not explode', async () => {
    await renderWithShell(<Settings />);
  });

  it('has a title', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('Settings');
  });

  it('contains account details', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('First Name');
    await page.findAllByText('Last Name');
  });

  it('contains contact details', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('Email Address');
    await page.findAllByText('Phone Number');
    await page.findAllByText('Preferred Contact Method');
  });

  it('has an option to review data sharing consent', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('Review Data Sharing Consent');
  });

  it('has an option to review user agreement', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('Review Patient Portal User Agreement');
  });

  it('has an option to delete the account', async () => {
    const page = await renderWithShell(<Settings />);
    await page.findAllByText('Delete My Account');
  });
});
