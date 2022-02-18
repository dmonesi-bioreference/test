import { renderWithShell } from 'test-utils';

import Pdf from './Pdf';

const blob = new Blob([""], { type: "application/pdf" });

describe('The PDF component', () => {
  it('does not explode', async () => {
    await renderWithShell(<Pdf src={blob} />);
  });
});
