import userEvents from '@testing-library/user-event';

import { renderWithShell } from 'test-utils';

import Audio from './Audio';

describe('The Audio component', () => {
  it('displays the Read Transcript button when first rendered', async () => {
    const page = await renderWithShell(
      <Audio
        title="title"
        src=""
        transcript={['itemOne']}
      />
    );

    await page.findByText('Read transcript');
    expect(await page.findByText('itemOne')).not.toBeVisible();
  });

  it('displays the transcript when Read Transcript button is clicked', async () => {
    const page = await renderWithShell(
      <Audio
        title="title"
        src=""
        transcript={['itemOne']}
      />
    );

    userEvents.click(await page.findByText('Read transcript'));
    await page.findByText('itemOne');
    expect(await page.findByText('itemOne')).toBeVisible();
  });

  it('shows the Close Transcript button when the transcript is visible', async () => {
    const page = await renderWithShell(
      <Audio
        title="title"
        src=""
        transcript={['itemOne']}
      />
    );

    userEvents.click(await page.findByText('Read transcript'));
    expect(await page.findByText('itemOne')).toBeVisible();
    await page.findByText('Close transcript');
  });

  it('shows the Read Transcript button again when the transcript has been closed', async () => {
    const page = await renderWithShell(
      <Audio
        title="title"
        src=""
        transcript={['itemOne']}
      />
    );

    userEvents.click(await page.findByText('Read transcript'));
    userEvents.click(await page.findByText('Close transcript'));
    await page.findByText('Read transcript');
    expect(await page.findByText('itemOne')).not.toBeVisible();
  });
});
