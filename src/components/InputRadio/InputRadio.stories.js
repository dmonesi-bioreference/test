import React from 'react';
import { storiesOf } from '@storybook/react';
import InputRadio from '.';

storiesOf('Components/Inputs/Radio', module)
  .addParameters({ component: InputRadio })
  .add('default', () => <InputRadio name="radio1" label="Radio Input" />);
