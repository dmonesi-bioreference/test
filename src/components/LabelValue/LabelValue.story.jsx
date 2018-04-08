import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelValue from '../LabelValue';

storiesOf('Label Value', module)
  .add('default', () => <LabelValue label="Phone Number" value="555-555-5555" />)
  .add('reverse', () => <LabelValue label="Phone Number" value="555-555-5555" reverse />);
