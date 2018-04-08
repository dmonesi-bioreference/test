import React from 'react';
import { storiesOf } from '@storybook/react';
import InputCheckbox from '../InputCheckbox';

storiesOf('Inputs/Checkbox', module)
  .add('default', () => <InputCheckbox name="checkbox1" label="Checkbox Input" />);
