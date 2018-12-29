import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import InputCheckbox from '.';

storiesOf('Components/Inputs/Checkbox', module)
  .addDecorator(withSmartKnobs)
  .add('default', () => <InputCheckbox name="checkbox1" label="Checkbox Input" />);
