import { renderWithShell } from 'test-utils';

import { DisplayField } from './DisplayField';

describe('The Display Field component', () => {
  it('renders the label and data when given', async () => {
    const page = await renderWithShell(
      <DisplayField label="Label">Here is the data</DisplayField>
    );

    await page.findByText('Label');
    await page.findByText('Here is the data');
  });

  it('renders the label and default value, when data is not given', async () => {
    const page = await renderWithShell(<DisplayField label="Label" />);

    await page.findByText('Label');
    await page.findByText('Not Available');
  });
});
