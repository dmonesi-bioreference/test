import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import Select from '.';

const options = [
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
];

storiesOf('Components/Inputs/Select', module)
  .addDecorator(withSmartKnobs)
  .add('default', () => <Select name="select" label="Select Label" options={options} />);
