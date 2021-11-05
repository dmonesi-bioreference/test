import { renderWithShell } from 'test-utils';

import { AuthenticationToken } from './index';


describe('The authentication token page', () => {
    it('does not explode', async () => {
      await renderWithShell(<AuthenticationToken />);
    });
  
      it('has slides.1.title', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
        await page.findAllByText('Results & ',{ exact: false });
      });  
      it('has slides.2.overView', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
  
        await page.findAllByText('View and learn ', { exact: false });

      });
      it('has slides.1.content', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
  
        await page.findAllByText('We provide you ', { exact: false });

      });
      it('has slides.2.title', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
  
        await page.findAllByText('Records ', { exact: false });

      });
      it('has slides.2.overView', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
  
        await page.findAllByText('Keep all records ', { exact: false });

      });
      it('has slides.2.content', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
  
        await page.findAllByText('Along with your ', { exact: false });

      });
      it('has slides.3.title', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
        await page.findAllByText('Community',{ exact: false });
      });
      it('has slides.2.overView', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
        await page.findAllByText('Feel the support ', { exact: false });

      });
      it('has slides.3.content', async () => {
        const page = await renderWithShell(<AuthenticationToken />);
        await page.findAllByText('Living with a rare ', { exact: false });

      });
    });