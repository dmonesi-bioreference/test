import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Icon, { IconProps } from './Icon';

export default {
  component: Icon,
  title: 'Components/Icon',
  parameters: {
    componentSubtitle: 'Insert an SVG icon from the Heroicons library.',
  },
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Heroicons = Template.bind({});

Heroicons.args = {
  name: 'academic-cap',
  style: 'solid',
};
