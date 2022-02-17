import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { colors } from 'styles';
import { Mocks } from 'test-utils/server/mocks';

import { InternalLinkCards } from './InternalLinkCards';

export default {
  component: InternalLinkCards,
  title: 'App/InternalLinkCards',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
};

const Template: Story = (args) => {
  return (
    <div style={{ background: colors.grey[300], padding: '24px' }}>
      <Shell
        requests={{
          allInternalLinkCards: async () => [
            Mocks.internalLinkCards.create({
              label: 'Resources',
              title: 'Learn more about genetics',
              blurb:
                "Get a useful overview of what goes into genetic testing, what we're looking for, and how that can better inform you on what to do next.",
            }),
            Mocks.internalLinkCards.create({
              label: 'Health Profile',
              title: 'Plan for your care',
              blurb:
                'Track and store information about your in your Health Profile, and keep track of important details to share with people who need to know.',
            }),
          ],
        }}
      >
        <InternalLinkCards {...args}></InternalLinkCards>
      </Shell>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
