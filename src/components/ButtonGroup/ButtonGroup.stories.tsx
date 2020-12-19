import { action } from '@storybook/addon-actions';
import React from 'react';
import ButtonGroup from '.';
import Button from '../Button/Button';

export default {
  component: ButtonGroup,
  title: 'Components/ButtonGroup',
};

export const defaultStory = () => (
  <ButtonGroup>
    <Button onClick={action('save-click')}>Save</Button>
    <Button onClick={action('cancel-click')} kind="secondary">
      Cancel
    </Button>
  </ButtonGroup>
);
