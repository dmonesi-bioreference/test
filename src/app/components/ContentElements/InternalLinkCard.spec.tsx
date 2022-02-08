import { Mocks, renderWithShell } from 'test-utils';

import { InternalLinkCards } from './InternalLinkCards';

describe('The internal link card component', () => {
  it('does not explode', async () => {
    await renderWithShell(<InternalLinkCards />);
  });

  it('render internal link cards', async () => {
    const page = await renderWithShell(<InternalLinkCards />, {
      requests: {
        allInternalLinkCards: async () => [
          Mocks.internalLinkCards.create({
            label: 'Resources',
            title: 'Learn more about genetics',
            blurb:
              "Get a useful overview of what goes into genetic testing, what we're looking for, and how that can better inform you on what to do next.",
          }),
          Mocks.internalLinkCards.create({
            label: 'Health Profile',
            title: "Plan for your child's care",
            blurb:
              "Track and store information about your child in your Health Profile, and keep track of important details to share with people who need to know.",
          }),
        ]
      },
    });

    await page.findByText('RESOURCES');
    await page.findByText('Learn more about genetics');
    await page.findByText("Get a useful overview of what goes into genetic testing, what we're looking for, and how that can better inform you on what to do next.");

    await page.findByText('HEALTH PROFILE');
    await page.findByText("Plan for your child's care");
    await page.findByText('Track and store information about your child in your Health Profile, and keep track of important details to share with people who need to know.');
  });
});
