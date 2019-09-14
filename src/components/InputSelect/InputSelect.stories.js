import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from '.'

const options = [
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
]

storiesOf('Components/Inputs/Select', module)
  .addParameters({ component: Select })
  .add('default', () => <Select name="select" label="Select Label" options={options} />)
  .add('bold weight label', () => (
    <Select name="select" label="Select Label" options={options} labelStyle="emphasized" />
  ))
  .add('horizontal layout', () => (
    <Select name="select" label="Select Label" options={options} orientation="horizontal" />
  ))
