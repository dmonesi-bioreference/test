import { Story } from '@storybook/react/types-6-0';

import { Typography } from '../Typography';

import Divider from './Divider';

export default {
  component: Divider,
  title: 'Components/Divider',
  parameters: {
    componentSubtitle: 'Provides a page break to visually separate elements.',
  },
};

const Template: Story = (args) => (
  <div style={{ width: 375 }}>
    <Typography type="body">Above</Typography>
    <Divider {...args} />
    <Typography type="body">Below</Typography>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {};
