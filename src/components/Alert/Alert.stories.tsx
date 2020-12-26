import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Alert, { AlertProps } from './Alert';
import Button from '../Button/Button';

export default {
  component: Alert,
  title: 'Components/Alert',
  parameters: {
    componentSubtitle: 'Alerts are used to display important information.',
  },
};

const Template: Story<AlertProps> = (args) => (
  <Alert {...args} open={true}>
    <strong>Hello!</strong> This is an alert message.
  </Alert>
);

const TriggerTemplate: Story<AlertProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const showFlash = () => {
    setIsOpen(true);
  };

  const resetFlash = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={showFlash}>Trigger Alert</Button>
      <div style={{ height: '1rem' }}></div>
      <Alert {...args} open={isOpen} onClose={resetFlash}>
        <strong>Hello!</strong> This is an alert message.
      </Alert>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  type: 'info',
};

export const Closeable = TriggerTemplate.bind({});

Closeable.args = {
  type: 'info',
  closable: true,
};

export const Duration = TriggerTemplate.bind({});

Duration.args = {
  type: 'info',
  closable: true,
  duration: 3000,
};

Duration.parameters = {
  docs: {
    storyDescription:
      'Due to Storybook limitations, this story only works in "Canvas" view.',
  },
};

export const Types: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Alert type="info" open={true}>
      <strong>Some information.</strong>
      <br />
      This is an info alert.
    </Alert>
    <Alert type="success" open={true}>
      <strong>Your changes have been saved.</strong>
      <br />
      You can safely exit the app now.
    </Alert>
    <Alert type="warning" open={true}>
      <strong>Your session has ended.</strong>
      <br />
      Please log in again to continue.
    </Alert>
    <Alert type="danger" open={true}>
      <strong>Your account has been deleted.</strong>
      <br />
      We&#8217;re sorry to see you go.
    </Alert>
  </div>
);
