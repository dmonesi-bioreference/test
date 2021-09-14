import { renderWithShell } from 'test-utils';

import { StepOne } from './StepOne';

describe('the first further registration page', () => {
  it('does not explode', async () => {
    await renderWithShell(<StepOne />);
  });

  describe('step one', () => {
    it('has a title', async () => {
      const page = await renderWithShell(<StepOne />);

      await page.findByText('Thank you!');
    });

    it('has first name and last name inputs', async () => {
      const page = await renderWithShell(<StepOne />);

      await page.findByText('First Name', { exact: false });
      await page.findByText('Last Name', { exact: false });
    });

    it('has a CTA to create account', async () => {
      const page = await renderWithShell(<StepOne />);

      await page.findByText('Next');
    });
  });
});
