import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import { RegistrationWizard } from './index';

export default {
  component: RegistrationWizard,
  title: 'Screens/RegistrationWizard',
};

const Template: Story = () => (
  <Shell>
    <RegistrationWizard />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
