import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import LabelValue from '../LabelValue';

storiesOf('Components/Label Value', module)
  .addDecorator(withSmartKnobs)
  .add('default', () => <LabelValue label="Phone Number" value="555-555-5555" />)
  .add('reverse', () => <LabelValue label="Phone Number" value="555-555-5555" reverse />);
