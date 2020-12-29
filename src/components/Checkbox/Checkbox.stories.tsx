import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Form Elements/Checkbox',
  parameters: {
    componentSubtitle:
      'Checkboxes allow the user to toggle an option on or off.',
  },
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Checkbox',
  size: 'medium',
  name: 'checkbox',
  value: 'true',
};
