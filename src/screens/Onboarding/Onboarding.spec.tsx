import { renderWithShell } from 'test-utils';

import { Onboarding } from './index';

describe('The authentication token page', () => {
  it('does not explode', async () => {
    await renderWithShell(<Onboarding />);
  });

  describe('First onboarding story', () => {
    it('has a label', async () => {
      const page = await renderWithShell(<Onboarding />);

      await page.findAllByText('Results & ', { exact: false });
    });

    it('has a heading', async () => {
      const page = await renderWithShell(<Onboarding />);

      await page.findAllByText('View and learn ', { exact: false });
    });

    it('has a description', async () => {
      const page = await renderWithShell(<Onboarding />);

      await page.findAllByText('We provide you ', { exact: false });
    });
  });

  describe('Second onboarding story', () => {
    it('has a label', async () => {
      const page = await renderWithShell(<Onboarding />);

      await page.findAllByText('Records ', { exact: false });
    });

    it('has a heading', async () => {
      const page = await renderWithShell(<Onboarding />);

      await page.findAllByText('Keep all records ', { exact: false });
    });

    it('has a description', async () => {
      const page = await renderWithShell(<Onboarding />);

      await page.findAllByText('Along with your ', { exact: false });
    });
  });
});
