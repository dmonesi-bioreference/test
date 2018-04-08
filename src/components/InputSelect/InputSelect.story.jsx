import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../InputSelect';

const options = [
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
];

storiesOf('Inputs/Select', module)
  .add('default', () => <Select name="select" label="Select Label" options={options} />);
