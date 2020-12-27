import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Input from './Input';
import Icon from '../Icon/Icon';
import { InputProps } from './Input';

export default {
  component: Input,
  title: 'Components/Form Elements/Input',
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Text Input',
  labelPosition: 'top',
  size: 'medium',
  name: 'input',
};

export const withIcons = Template.bind({});

withIcons.args = {
  ...Primary.args,
  prefix: <Icon name="key" />,
  suffix: <Icon name="light-bulb" />,
};
