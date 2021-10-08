import { renderWithShell } from 'test-utils';

import { DataSharingSettings } from './index';


describe('The dataConsent page', () => {
    it('does not explode', async () => {
      await renderWithShell(<DataSharingSettings />);
    });
  
    describe('data consent page', () => {
      it('has headData', async () => {
        const page = await renderWithShell(<DataSharingSettings />);
  
        await page.findByText('Data Sharing', { exact: false });

      });
      it('has dataSharingHeadingOne', async () => {
        const page = await renderWithShell(<DataSharingSettings />);
        await page.findByText('Allow Families ',{ exact: false });
      });
      it('has titleOne', async () => {
        const page = await renderWithShell(<DataSharingSettings />);
  
        await page.findByText('Conditions &', { exact: false });

      });
      it('has titleTwo', async () => {
        const page = await renderWithShell(<DataSharingSettings />);
  
        await page.findByText('Medications', { exact: false });

      });
      it('has titleThree', async () => {
        const page = await renderWithShell(<DataSharingSettings />);
  
        await page.findByText('Reported', { exact: false });

      });
    });
  });