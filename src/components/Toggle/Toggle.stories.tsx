import { Story } from '@storybook/react/types-6-0';

import Toggle, { ToggleProps } from './Toggle';

export default {
  component: Toggle,
  title: 'Components/Toggle',
  parameters: {
    componentSubtitle: 'ON/OFF Switch',
  },
}

const Template: Story<ToggleProps> = (args) => (
  <Toggle {...args}>
   
  </Toggle>
);

export const Primary = Template.bind({});

Primary.args = {};
