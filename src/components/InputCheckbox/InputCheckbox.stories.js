import React from 'react';
import { storiesOf } from '@storybook/react';
import InputCheckbox from '.';

storiesOf('Components/Inputs/Checkbox', module).add('default', () => (
  <InputCheckbox name="checkbox1" label="Checkbox Input" />
));
