import { screen } from '@testing-library/react';

import * as TestUtils from 'test-utils';

import { Typography } from './Typography';

it('renders a div for heading 7 and 8', async () => {
  await TestUtils.renderWithShell(
    <>
      <Typography type="heading" level="7">
        Seven
      </Typography>
      <Typography type="heading" level="8">
        Eight
      </Typography>
    </>
  );

  expect((await screen.findByText('Seven')).tagName).toBe('DIV');
  expect((await screen.findByText('Eight')).tagName).toBe('DIV');
});
