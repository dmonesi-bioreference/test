import { renderWithShell } from 'test-utils';

import { StepThree } from './StepThree';

describe('the third further registration page', () => {
  it('does not explode', async () => {
    await renderWithShell(<StepThree />);
  });

  describe('step three', () => {
    it('has a sub title', async () => {
      const page = await renderWithShell(<StepThree />);

      await page.findByText(
        'Giving us some extra information about you can help us to tailor your experience with us.'
      );
    });

    it('has relation to patient and dob inputs', async () => {
      const page = await renderWithShell(<StepThree />);

      await page.findByText('Relationship to Patient', { exact: false });
      page.getByLabelText('Your Date of Birth');
    });

    it('has a CTA to create account', async () => {
      const page = await renderWithShell(<StepThree />);

      await page.findByText('Next');
    });
  });
});
