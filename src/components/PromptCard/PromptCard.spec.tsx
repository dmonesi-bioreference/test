import { screen } from '@testing-library/react';

import * as TestUtils from 'test-utils';

import { PromptCard } from '.';

describe('Rendering', () => {
  const promptText = 'A Prompt';
  const headingText = 'A heading';
  const bodyText = 'A body';

  beforeEach(async () => {
    await TestUtils.renderWithShell(
      <PromptCard prompt={promptText} heading={headingText}>
        {bodyText}
      </PromptCard>
    );
  });

  it('renders a clickable prompt', () => {
    screen.getByRole('button', { name: promptText });
  });

  it('renders a heading', () => {
    screen.getByRole('heading', { name: headingText });
  });

  it('renders a body', async () => {
    expect(screen.getByRole('paragraph').textContent).toEqual(bodyText);
  });
});
