import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Shell } from 'components/Shell';

type ShellProps = Parameters<typeof Shell>[0];

export const delay = async (timeInMillis = 300) => {
  await new Promise((resolve) => setTimeout(resolve, timeInMillis));
};

export const renderWithShell = async (
  ui: any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { children, ...props }: ShellProps = {}
) => {
  const component = render(<Shell {...props}>{ui}</Shell>);

  await act(async () => {
    await delay(16);
  });

  return component;
};

export * from './pages';
export * from 'react-dom/test-utils';
