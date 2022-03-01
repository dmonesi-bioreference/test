import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { Settings } from 'screens/Settings';

export default {
  component: Settings,
  title: 'Screens/Settings',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => (
  <Shell>
    <Settings />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
