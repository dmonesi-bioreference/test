import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Select, { SelectProps } from './Select';

// const options = [
//   { name: 'Option 1', value: 'option1' },
//   { name: 'Option 2', value: 'option2' },
//   { name: 'Option 3', value: 'option3' },
// ];

export default {
  component: Select,
  title: 'Components/Form Elements/Select',
};

const Template: Story<SelectProps> = (args) => (
  <Select {...args}>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Select',
  labelPosition: 'top',
  size: 'medium',
  name: 'select',
};
