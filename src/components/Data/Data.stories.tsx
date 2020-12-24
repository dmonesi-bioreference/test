import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Data, { DataProps } from './Data';

export default {
  component: Data,
  title: 'Components/Data',
};

const Template: Story<DataProps> = (args) => (
  <Data {...args}>555-555-5555</Data>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Phone Number',
};

export const Reversed: Story<DataProps> = Template.bind({});

Reversed.args = {
  ...Default.args,
  isReversed: true,
};

export const Horizontal: Story<DataProps> = Template.bind({});

Horizontal.args = {
  ...Default.args,
  orientation: 'horizontal',
};
