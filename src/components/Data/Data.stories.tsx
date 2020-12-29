import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Data, { DataProps } from './Data';

export default {
  component: Data,
  title: 'Components/Data',
  parameters: {
    componentSubtitle:
      'Data components provide a way to pair the display of data with a label.',
  },
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

Reversed.parameters = {
  docs: {
    storyDescription:
      'Set `isReversed` to `true` to position the label below the data in a vertical orientation, or to the right of the data in a horizontal orientation.',
  },
};

export const Horizontal: Story<DataProps> = Template.bind({});

Horizontal.args = {
  ...Default.args,
  orientation: 'horizontal',
};

Horizontal.parameters = {
  docs: {
    storyDescription:
      'Set `orientation` to `horizontal` to display both the label and data alongside each other.',
  },
};
