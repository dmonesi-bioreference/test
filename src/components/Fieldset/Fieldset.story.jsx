import React from 'react';
import { storiesOf } from '@storybook/react';
import Fieldset from '../Fieldset';
import InputCheckbox from '../InputCheckbox';
import InputRadio from '../InputRadio';
import InputText from '../InputText';

storiesOf('Components/Inputs/Fieldset', module)
  .add('with text inputs', () => (
    <Fieldset label="Fieldset Label">
      <InputText name="field1" type="text" label="Field One" />
      <InputText name="field2" type="text" label="Field Two" />
    </Fieldset>))
  .add('with checkboxes', () => (
    <Fieldset label="Fieldset Label">
      <InputCheckbox name="checkbox1" label="Checkbox One" />
      <InputCheckbox name="checkbox2" label="Checkbox Two" />
    </Fieldset>))
  .add('with radio buttons', () => (
    <Fieldset label="Fieldset Label">
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>));
