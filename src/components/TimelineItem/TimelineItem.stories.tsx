import { Story } from '@storybook/react/types-6-0';

import { Icon } from 'components/Icon';

import TimelineItem, { TimelineItemProps } from './TimelineItem';

export default {
  component: TimelineItem,
  title: 'Components/TimelineItem',
  parameters: {
    componentSubtitle: 'Short description of component.',
  },
};

const Template: Story<TimelineItemProps> = (args) => (
  <>
    <TimelineItem {...args} />
    <TimelineItem {...args} isSmall />
    <TimelineItem {...args} isSmall isTail />
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  heading: 'Heading goes here',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  link: {
    label: 'Link goes here',
    onClick: () => null,
  },
  icon: <Icon name="search" style="solid" />,
};
