import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Textarea, { TextareaProps } from './Textarea';

export default {
  component: Textarea,
  title: 'Components/Form Elements/Textarea',
  parameters: {
    componentSubtitle:
      'Textareas collect data from the user and allow multiple lines of text',
  },
};

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Textarea Input',
  labelPosition: 'top',
  size: 'medium',
  name: 'textarea',
};
