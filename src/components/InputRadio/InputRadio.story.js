import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import InputRadio from '.';

storiesOf('Components/Inputs/Radio', module)
  .addDecorator(withSmartKnobs)
  .add('default', () => <InputRadio name="radio1" label="Radio Input" />);
