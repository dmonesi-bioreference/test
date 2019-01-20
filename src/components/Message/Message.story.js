import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { selectV2 } from '@storybook/addon-knobs/react';
import Message from '.';
import { iconArray } from '../Icon';

storiesOf('Components/Message', module)
  .addDecorator(withSmartKnobs)
  .add('default', () => (
    <Message icon={selectV2('Icon', iconArray, undefined, null)}>Message text goes here.</Message>
  ))
  .add('info', () => (
    <Message type="info" icon={selectV2('Icon', iconArray, 'info', null)}>
      Message text goes here.
    </Message>
  ))
  .add('error', () => (
    <Message type="error" icon={selectV2('Icon', iconArray, 'error', null)}>
      Message text goes here.
    </Message>
  ))
  .add('success', () => (
    <Message type="success" icon={selectV2('Icon', iconArray, 'checkmark', null)}>
      Message text goes here.
    </Message>
  ));
