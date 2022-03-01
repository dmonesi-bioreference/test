import { screen } from '@testing-library/react';

import * as TestUtils from 'test-utils';

import { Typography, Heading } from './Typography';

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

it('returns a header in the 1-6 range as an h tag', async () => {
  await TestUtils.renderWithShell(<Heading level="1">One</Heading>);
  await TestUtils.renderWithShell(<Heading level="2">Two</Heading>);
  await TestUtils.renderWithShell(<Heading level="3">Three</Heading>);
  await TestUtils.renderWithShell(<Heading level="4">Four</Heading>);
  await TestUtils.renderWithShell(<Heading level="5">Five</Heading>);
  await TestUtils.renderWithShell(<Heading level="6">Six</Heading>);

  expect((await screen.findByText('One')).tagName).toBe('H1');
  expect((await screen.findByText('Two')).tagName).toBe('H2');
  expect((await screen.findByText('Three')).tagName).toBe('H3');
  expect((await screen.findByText('Four')).tagName).toBe('H4');
  expect((await screen.findByText('Five')).tagName).toBe('H5');
  expect((await screen.findByText('Six')).tagName).toBe('H6');
});
