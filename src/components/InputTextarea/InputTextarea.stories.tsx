import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import InputTextArea, { InputTextAreaProps } from './InputTextArea';

export default {
  component: InputTextArea,
  title: 'Components/Inputs/Textarea',
};

const Template: Story<InputTextAreaProps> = (args) => (
  <InputTextArea {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'Textarea Input',
  labelPosition: 'top',
  size: 'medium',
  name: 'textarea',
};
