import { screen } from '@testing-library/react';

import { renderWithShell } from 'test-utils';

import { TestingProcess } from './TestingProcess';

describe('The testing process page', () => {
  it('does not explode', async () => {
    await renderWithShell(<TestingProcess />);
  });

  describe('testing process section', () => {
    it('has a title', async () => {
      const page = await renderWithShell(<TestingProcess />);

      await page.findByText('The Genetic Testing Process');
    });

    it('shows the current step', async () => {
      const page = await renderWithShell(<TestingProcess />);

      await page.findByText('Current step');
    });

    it('has a CTA to receive progress updates', async () => {
      const page = await renderWithShell(<TestingProcess />);

      await page.findByText('Receive progress updates');
    });

    it('has a process breakdown card with a current step', async () => {
      const page = await renderWithShell(<TestingProcess />);

      await page.findByText('Process Breakdown');
      await page.findByText('Current');

      const label = screen.getByText('Current');

      expect(label.classList).toContain('label');
      expect(label.classList).toContain('primary');
    });

    it('has more than one step', async () => {
      const page = await renderWithShell(<TestingProcess />);

      await page.findByText('Step 1');
      await page.findByText('Step 2');
    });
  });
});
