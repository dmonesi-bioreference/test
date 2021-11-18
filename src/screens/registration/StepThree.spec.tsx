import userEvent from '@testing-library/user-event';

import { useAppEvents } from 'app';
import { act, delay, renderWithShell } from 'test-utils';

import { StepThree } from './StepThree';

function SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity(
  props: Props<{ date: string }>
) {
  const events = useAppEvents();

  return (
    <button
      onClick={() =>
        events.caregiverRelationshipChange({ field: 'dob', value: props.date })
      }
    >
      Date of birth workaround
    </button>
  );
}

describe('Step three page', () => {
  it('does not explode', async () => {
    await renderWithShell(<StepThree />);
  });

  describe('Caregiver relationship form validation', () => {
    it('disables next button until form is valid', async () => {
      const page = await renderWithShell(
        <>
          <SetCustomDateInOrderToGetAroundDatePickerMarkupComplexity date="01/01/2021" />
          <StepThree />
        </>
      );

      expect((await page.findByText('Next')).parentElement).toBeDisabled();

      userEvent.click(await page.findByText('Date of birth workaround'));

      await act(async () => {
        await delay(300);
      });

      expect((await page.findByText('Next')).parentElement).not.toBeDisabled();
    });
  });
});
