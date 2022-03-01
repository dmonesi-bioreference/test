import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { HealthProfile } from 'screens/HealthProfile';

export default {
  component: HealthProfile,
  title: 'Screens/HealthProfile',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => (
  <Shell>
    <HealthProfile />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
