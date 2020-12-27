import React from 'react';
import Fieldset from '.';
import InputCheckbox from '../Checkbox/Checkbox';
import InputRadio from '../InputRadio';
import Input from '../Input/Input';

export default {
  component: Fieldset,
  title: 'Components/Form Elements/Fieldset',
};

export const withTextInputs = () => (
  <Fieldset label="Fieldset Label">
    <Input name="field1" type="text" label="Field One" />
    <Input name="field2" type="text" label="Field Two" />
  </Fieldset>
);

export const withCheckboxes = () => (
  <Fieldset label="Fieldset Label">
    <InputCheckbox name="checkbox1" label="Checkbox One" />
    <InputCheckbox name="checkbox2" label="Checkbox Two" />
  </Fieldset>
);

export const withRadioButtons = () => (
  <Fieldset label="Fieldset Label">
    <InputRadio name="radio1" label="Radio One" />
    <InputRadio name="radio1" label="Radio Two" />
  </Fieldset>
);

export const withHorizontalLayoutRadio = () => (
  <Fieldset label="Fieldset Label" orientation="horizontal">
    <InputRadio name="radio1" label="Radio One" />
    <InputRadio name="radio1" label="Radio Two" />
  </Fieldset>
);

export const withHorizontalLayoutCheckbox = () => (
  <Fieldset label="Fieldset Label" orientation="horizontal">
    <InputCheckbox name="checkbox1" label="Checkbox One" />
    <InputCheckbox name="checkbox2" label="Checkbox Two" />
  </Fieldset>
);

export const withHorizontalChildren = () => (
  <Fieldset label="Fieldset Label" childrenOrientation="horizontal">
    <InputRadio name="radio1" label="Radio One" />
    <InputRadio name="radio1" label="Radio Two" />
  </Fieldset>
);

export const withLargeLegend = () => (
  <Fieldset label="Fieldset Label" labelSize="large">
    <InputRadio name="radio1" label="Radio One" />
    <InputRadio name="radio1" label="Radio Two" />
  </Fieldset>
);

export const withRegularLegendWeight = () => (
  <Fieldset label="Fieldset Label" labelStyle="normal">
    <InputRadio name="radio1" label="Radio One" />
    <InputRadio name="radio1" label="Radio Two" />
  </Fieldset>
);

export const withHiddenLegend = () => (
  <Fieldset label="Fieldset Label" hideLegend={true}>
    <InputRadio name="radio1" label="Radio One" />
    <InputRadio name="radio1" label="Radio Two" />
  </Fieldset>
);
