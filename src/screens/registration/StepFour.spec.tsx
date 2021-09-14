import { renderWithShell } from 'test-utils';

import { StepFour } from './StepFour';

describe('the fourth further registration page', () => {
  it('does not explode', async () => {
    await renderWithShell(<StepFour />);
  });

  describe('step four', () => {
    it('has a sub title', async () => {
      const page = await renderWithShell(<StepFour />);

      await page.findByText(
        'Lastly, create a strong password to help keep your account and your child’s information safe.'
      );
    });

    it('has password inputs', async () => {
      const page = await renderWithShell(<StepFour />);

      page.getByLabelText('Password');
      page.getByLabelText('Confirm Password');
    });

    it('has a CTA to create account', async () => {
      const page = await renderWithShell(<StepFour />);

      await page.findByText('Next');
    });
  });
});
