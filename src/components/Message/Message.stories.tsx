import React from 'react';
import Message from '.';

export default {
  component: Message,
  title: 'Components/Message',
};

export const defaultStory = () => <Message>Message text goes here.</Message>;

export const info = () => (
  <Message type="info" icon="information-outline">
    Message text goes here.
  </Message>
);

export const error = () => (
  <Message type="error" icon="exclamation-outline">
    Message text goes here.
  </Message>
);

export const warning = () => (
  <Message type="warning" icon="flag">
    Message text goes here.
  </Message>
);

export const success = () => (
  <Message type="success" icon="checkmark">
    Message text goes here.
  </Message>
);
