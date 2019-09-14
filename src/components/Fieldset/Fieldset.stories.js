import React from 'react'
import { storiesOf } from '@storybook/react'
import Fieldset from '.'
import InputCheckbox from '../InputCheckbox'
import InputRadio from '../InputRadio'
import InputText from '../InputText'

storiesOf('Components/Inputs/Fieldset', module)
  .addParameters({ component: Fieldset })
  .add('with text inputs', () => (
    <Fieldset label="Fieldset Label">
      <InputText name="field1" type="text" label="Field One" />
      <InputText name="field2" type="text" label="Field Two" />
    </Fieldset>
  ))
  .add('with checkboxes', () => (
    <Fieldset label="Fieldset Label">
      <InputCheckbox name="checkbox1" label="Checkbox One" />
      <InputCheckbox name="checkbox2" label="Checkbox Two" />
    </Fieldset>
  ))
  .add('with radio buttons', () => (
    <Fieldset label="Fieldset Label">
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>
  ))
  .add('with horizontal layout (radio)', () => (
    <Fieldset label="Fieldset Label" orientation="horizontal">
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>
  ))
  .add('with horizontal layout (checkbox)', () => (
    <Fieldset label="Fieldset Label" orientation="horizontal">
      <InputCheckbox name="checkbox1" label="Checkbox One" />
      <InputCheckbox name="checkbox2" label="Checkbox Two" />
    </Fieldset>
  ))
  .add('with horizontal children', () => (
    <Fieldset label="Fieldset Label" childrenOrientation="horizontal">
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>
  ))
  .add('with large legend', () => (
    <Fieldset label="Fieldset Label" labelSize="large">
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>
  ))
  .add('with regular legend weight', () => (
    <Fieldset label="Fieldset Label" labelStyle="normal">
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>
  ))
  .add('with hidden legend', () => (
    <Fieldset label="Fieldset Label" hideLegend>
      <InputRadio name="radio1" label="Radio One" />
      <InputRadio name="radio1" label="Radio Two" />
    </Fieldset>
  ))
