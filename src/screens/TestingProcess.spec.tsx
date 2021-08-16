import { renderWithShell } from 'test-utils';

import { TestingProcess } from './TestingProcess';

describe('The home page', () => {
  it('does not explode', async () => {
    await renderWithShell(<TestingProcess />);
  });
});
