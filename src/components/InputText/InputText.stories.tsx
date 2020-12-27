import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import InputText from './InputText';
import Icon from '../Icon/Icon';
import { InputTextProps } from './InputText';

export default {
  component: InputText,
  title: 'Components/Inputs/Text',
};

const Template: Story<InputTextProps> = (args) => <InputText {...args} />;

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
