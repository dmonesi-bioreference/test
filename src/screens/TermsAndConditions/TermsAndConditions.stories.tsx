import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';

import { TermsAndConditions } from './index';

export default {
  component: TermsAndConditions,
  title: 'Screens/TermsAndConditions',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => (
  <Shell>
    <TermsAndConditions />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
