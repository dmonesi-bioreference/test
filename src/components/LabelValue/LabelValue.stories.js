import React from 'react'
import { storiesOf } from '@storybook/react'
import LabelValue from '.'

storiesOf('Components/Label Value', module)
  .addParameters({ component: LabelValue })
  .add('default', () => <LabelValue label="Phone Number" value="555-555-5555" />)
  .add('reverse', () => <LabelValue label="Phone Number" value="555-555-5555" reverse />)
  .add('horizontal', () => (
    <LabelValue label="Phone Number" value="555-555-5555" orientation="horizontal" />
  ))
  .add('horizontal reverse', () => (
    <LabelValue label="Phone Number" value="555-555-5555" reverse orientation="horizontal" />
  ))
