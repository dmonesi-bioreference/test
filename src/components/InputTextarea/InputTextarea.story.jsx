import React from 'react';
import { storiesOf } from '@storybook/react';
import InputTextArea from '../InputTextarea';

storiesOf('Inputs/Textarea', module)
  .add('default', () => <InputTextArea name="textarea" label="Text Area" />)
  .add('error', () => <InputTextArea name="textarea" label="Text Area Error State" invalidMessage="This field is required." invalid />)
  .add('disabled', () => <InputTextArea name="textarea" label="Disabled Text Area Field" disabled />)
  .add('read only', () => <InputTextArea name="textarea" label="Ready Only Text Area Field" value="Ready only value" readonly />);
