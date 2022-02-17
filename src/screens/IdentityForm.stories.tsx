import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { IdentityForm } from 'screens/IdentityForm';

export default {
  component: IdentityForm,
  title: 'Screens/IdentityForm',
};

const Template: Story = () => (
  <Shell>
    <IdentityForm />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
