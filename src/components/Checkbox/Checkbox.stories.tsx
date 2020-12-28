import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Form Elements/Checkbox',
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Checkbox',
  size: 'medium',
  name: 'checkbox',
  value: 'true',
};
