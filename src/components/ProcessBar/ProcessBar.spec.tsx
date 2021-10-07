import * as TestUtils from 'test-utils';

import { ProcessBar } from '.';

describe('ProcessBar', () => {
  it('renders elements with correct class levels', async () => {
    const bar = await TestUtils.renderWithShell(
      <ProcessBar stepsAmount={5} currentStep={3} />
    );

    expect(
      bar.container.querySelectorAll('.process-bar__step-group')
    ).toHaveLength(4);

    expect(
      bar.container.querySelectorAll('.process-bar__link--complete')
    ).toHaveLength(2);

    expect(
      bar.container.querySelectorAll('.process-bar__link--incomplete')
    ).toHaveLength(2);

    expect(
      bar.container.querySelectorAll('.process-bar__step--complete')
    ).toHaveLength(3);

    expect(
      bar.container.querySelectorAll('.process-bar__step--incomplete')
    ).toHaveLength(2);
  });
});
