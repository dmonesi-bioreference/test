import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { LoginPage } from 'screens/LoginPage';

export default {
  component: LoginPage,
  title: 'Screens/LoginPage',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => (
  <Shell>
    <LoginPage />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
