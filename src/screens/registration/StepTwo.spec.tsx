import { renderWithShell } from 'test-utils';

import { StepTwo } from './StepTwo';

describe('the second further registration page', () => {
  it('does not explode', async () => {
    await renderWithShell(<StepTwo />);
  });

  describe('step two', () => {
    it('has a sub title', async () => {
      const page = await renderWithShell(<StepTwo />);

      await page.findByText(
        'Please let us know how we can notify you of your child’s genetic test results.'
      );
    });

    it('has email and number inputs', async () => {
      const page = await renderWithShell(<StepTwo />);

      page.getByRole('textbox', { name: 'Your Email Address' });
      page.getByRole('spinbutton', { name: 'Your Mobile Number' });
    });

    it('has a CTA to create account', async () => {
      const page = await renderWithShell(<StepTwo />);

      await page.findByText('Next');
    });
  });
});
