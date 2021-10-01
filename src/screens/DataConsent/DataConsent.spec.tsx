import { renderWithShell } from 'test-utils';

import { DataConsent } from './index';


describe('The dataConsent page', () => {
    it('does not explode', async () => {
      await renderWithShell(<DataConsent />);
    });
  
    describe('data consent page', () => {
      it('has resources', async () => {
        const page = await renderWithShell(<DataConsent />);
  
        await page.findByText('PERSONALIZED', { exact: false });

      });
      it('has similar', async () => {
        const page = await renderWithShell(<DataConsent />);
        await page.findByText('SIMILAR ',{ exact: false });
      });
      it('has a child', async () => {
        const page = await renderWithShell(<DataConsent />);
  
        await page.findByText('Personalize ', { exact: false });

      });
      it('has a para', async () => {
        const page = await renderWithShell(<DataConsent />);
  
        await page.findByText('We can provide more', { exact: false });

      });
      it('has radio input', async () => {
        const page = await renderWithShell(<DataConsent />);
  
        await page.findByText('Yes ', { exact: false });

      });
      it('has radio input', async () => {
        const page = await renderWithShell(<DataConsent />);
  
        await page.findByText('No ', { exact: false });

      });
      it('has button', async () => {
        const page = await renderWithShell(<DataConsent />);
        await page.findByText('Continue', { exact: false });

      });
      it('has a footer', async () => {
        const page = await renderWithShell(<DataConsent />);
        await page.findByText('You can always change', { exact: false });

      });
    });
  });