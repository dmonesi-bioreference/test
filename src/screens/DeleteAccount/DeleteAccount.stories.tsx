import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { DeleteAccount } from 'screens/DeleteAccount';

export default {
  component: DeleteAccount,
  title: 'Screens/DeleteAccount',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => (
  <Shell>
    <DeleteAccount />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
