import { Story } from '@storybook/react/types-6-0';

import List from './List';

export default {
  component: List,
  title: 'Components/List',
  parameters: {
    componentSubtitle: 'Display information in a list structure.',
  },
};

const Template: Story = (args) => (
  <List kind="bulleted" {...args}>
    <div>One.</div>
    <div>Two.</div>
    <div>Three.</div>
  </List>
);

export const Primary = Template.bind({});

Primary.args = {};
