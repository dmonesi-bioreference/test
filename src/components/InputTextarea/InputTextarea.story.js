import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import InputTextArea from '.';

storiesOf('Components/Inputs/Textarea', module)
  .addDecorator(withSmartKnobs)
  .add('default', () => <InputTextArea name="textarea" label="Text Area" />)
  .add('error', () => (
    <InputTextArea
      name="textarea"
      label="Text Area Error State"
      invalidMessage="This field is required."
      invalid
    />
  ))
  .add('disabled', () => (
    <InputTextArea name="textarea" label="Disabled Text Area Field" disabled />
  ))
  .add('read only', () => (
    <InputTextArea
      name="textarea"
      label="Ready Only Text Area Field"
      value="Ready only value"
      readonly
    />
  ));
