import { action } from '@storybook/addon-actions';
import React from 'react';
import ConfirmationButton from '.';
import Button from '../Button/Button';

export default {
  component: ConfirmationButton,
  title: 'Components/Confirmation Button',
  parameters: {
    controls: { hideNoControlsWarning: true },
    componentSubtitle:
      'Confirmation Button requires an additional confirmation from the user before performing a task.',
  },
};

export const prompt = () => (
  <ConfirmationButton
    type="inline"
    prompt="Are you sure?"
    onConfirm={action('Deleted')}
    confirmButton={<Button kind="danger">Confirm</Button>}
    cancelButton={<Button kind="default">Cancel</Button>}
  >
    <Button>Delete Entry</Button>
  </ConfirmationButton>
);

export const modal = () => (
  <ConfirmationButton
    type="dialog"
    prompt="Are you sure?"
    onConfirm={action('Deleted')}
    confirmButton={<Button kind="danger">Confirm</Button>}
    cancelButton={<Button kind="default">Cancel</Button>}
  >
    <Button>Delete Entry</Button>
  </ConfirmationButton>
);

modal.parameters = {
  docs: {
    storyDescription:
      'Set `type` to `dialog` to display the confirmation as a modal dialog.',
  },
};
