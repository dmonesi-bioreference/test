import { renderWithShell } from 'test-utils';

import { PreResultsPause } from './PreResultsPause';

describe('The Pre Results Pause page', () => {
  it('does not explode', async () => {
    await renderWithShell(<PreResultsPause />);
  });

  it('has a title', async () => {
    const page = await renderWithShell(<PreResultsPause />);
    await page.findAllByText('Let’s take a moment', { exact: false });
  });

  it('has a description', async () => {
    const page = await renderWithShell(<PreResultsPause />);

    await page.findAllByText('receiving test results can be difficult', {
      exact: false,
    });
    await page.findAllByText('test reports have some limitations', {
      exact: false,
    });
  });

  it('has a genetic counselor support audio component', async () => {
    const page = await renderWithShell(<PreResultsPause />);

    await page.findAllByText('Genetic Counselor Support', { exact: false });
  });

  it('has a description within genetic counselor support audio', async () => {
    const page = await renderWithShell(<PreResultsPause />);

    await page.findAllByText('Laura explains why', { exact: false });
  });

  it('has a transcript available', async () => {
    const page = await renderWithShell(<PreResultsPause />);

    await page.findAllByText('right setting', { exact: false });
    await page.findAllByText('right people', { exact: false });
    await page.findAllByText('waiting to ask questions', { exact: false });
  });

  it('has a multiple available actions', async () => {
    const page = await renderWithShell(<PreResultsPause />);

    await page.findAllByText('Continue', { exact: false });
    await page.findAllByText('go back', { exact: false });
  });
});
