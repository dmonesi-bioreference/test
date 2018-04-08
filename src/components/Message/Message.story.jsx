import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { selectV2 } from '@storybook/addon-knobs/react';
import Message from '../Message';
import { iconArray } from '../Icon';

storiesOf('Message', module)
  .addDecorator(withSmartKnobs)
  .add('default', () => <Message text="Message text goes here." icon={selectV2('Icon', iconArray, undefined, null)} />)
  .add('info', () => <Message text="Message text goes here." type="info" icon={selectV2('Icon', iconArray, 'info', null)} />)
  .add('error', () => <Message text="Message text goes here." type="error" icon={selectV2('Icon', iconArray, 'error', null)} />)
  .add('success', () => <Message text="Message text goes here." type="success" icon={selectV2('Icon', iconArray, 'checkmark', null)} />);
