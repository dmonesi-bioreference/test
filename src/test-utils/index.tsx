import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Shell } from 'components/Shell';

export const renderWithShell = async (ui: any) => {
  const component = render(<Shell>{ui}</Shell>);

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 16));
  });

  return component;
};
