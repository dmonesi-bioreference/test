import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Message, { MessageProps } from './Message';

export default {
  component: Message,
  title: 'Components/Message',
  parameters: {
    componentSubtitle:
      'Messages are used to communicate instructional information.',
  },
};

const Template: Story<MessageProps> = (args) => (
  <Message {...args}>Message text goes here.</Message>
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'info',
};

export const hideIcon = Template.bind({});

hideIcon.args = {
  type: 'danger',
  hideIcon: true,
};

hideIcon.parameters = {
  docs: {
    storyDescription:
      'Set `hideIcon` to true to hide the associated icon. (This is generally discouraged for accessibility reasons.)',
  },
};

export const Types = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Message type="info">The upcoming holiday may affect these hours.</Message>
    <Message type="success">Registration successful!</Message>
    <Message type="warning">Please complete all fields.</Message>
    <Message type="danger">This action cannot be undone!</Message>
  </div>
);

Types.parameters = {
  docs: {
    storyDescription: "Set the `type` prop to change the message's type.",
  },
};
