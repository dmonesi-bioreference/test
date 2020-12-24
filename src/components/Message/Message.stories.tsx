import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Message, { MessageProps } from './Message';

export default {
  component: Message,
  title: 'Components/Message',
};

const Template: Story<MessageProps> = (args) => (
  <Message {...args}>Message text goes here.</Message>
);

export const Info = Template.bind({});

Info.args = {
  type: 'info',
};

export const Success = Template.bind({});

Success.args = {
  type: 'success',
};

export const Warning = Template.bind({});

Warning.args = {
  type: 'warning',
};

export const Danger = Template.bind({});

Danger.args = {
  type: 'danger',
};
