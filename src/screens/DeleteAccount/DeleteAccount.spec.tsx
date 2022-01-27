import { renderWithShell } from 'test-utils';

import { DeleteAccount } from './index';

describe('The Delete Account Page', () => {
  it('does not explode', async () => {
    await renderWithShell(<DeleteAccount />);
  });

  it('has a title', async () => {
    const page = await renderWithShell(<DeleteAccount />);
    await page.findAllByText('Delete Account');
  });

  it('explains how to delete account via contacting customer service', async () => {
    const page = await renderWithShell(<DeleteAccount />);
    await page.findByText('account can be deleted by emailing', {
      exact: false,
    });
  });

  it('contains contact details for customer service', async () => {
    const page = await renderWithShell(<DeleteAccount />);
    await page.findByText('zebras@genedx.com', { exact: false });
    await page.findByText('1-888-XXXX option 3', { exact: false });
  });

  it('describes how account holder information is used', async () => {
    const page = await renderWithShell(<DeleteAccount />);
    await page.findByText(
      'information provided by you will be stored securely',
      { exact: false }
    );
  });

  it('explains the implications of account deletion', async () => {
    const page = await renderWithShell(<DeleteAccount />);
    await page.findByText('can I still get test results?', { exact: false });
    await page.findByText('You can still get your test results', {
      exact: false,
    });
  });

  it('provides options for account deletion method', async () => {
    const page = await renderWithShell(<DeleteAccount />);
    await page.findAllByText('Email Us');
    await page.findAllByText('Call Us');
  });
});
