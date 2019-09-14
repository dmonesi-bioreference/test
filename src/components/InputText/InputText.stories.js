import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'
import InputText from '.'
import { iconArray } from '../Icon'

storiesOf('Components/Inputs/Text', module)
  .addParameters({ component: InputText })
  .add('default', () => <InputText name="text" type="text" label="Text Input" />)
  .add('horizontal layout', () => (
    <InputText name="text" type="text" label="Text Input" orientation="horizontal" />
  ))
  .add('bold weight label', () => (
    <InputText name="text" type="text" label="Text Input" labelStyle="emphasized" />
  ))
  .add('password', () => <InputText name="password" type="password" label="Password Field" />)
  .add('left icon', () => (
    <InputText
      name="text"
      type="text"
      label="Text Input w/ Left Icon"
      icon={select('Icon', iconArray, 'search', null)}
    />
  ))
  .add('placeholder', () => (
    <InputText
      name="text"
      type="text"
      label="Text Input w/ Placeholder"
      placeholder="placeholder"
    />
  ))
  .add('hidden label', () => (
    <InputText name="text" type="text" label="Label" hideLabel placeholder="hidden label field" />
  ))
  .add('error', () => (
    <InputText
      name="text"
      type="text"
      label="Text Input Error State"
      invalid
      invalidMessage="This field is required."
    />
  ))
  .add('disabled', () => (
    <InputText name="text" type="text" label="Disabled Input Field" disabled />
  ))
  .add('read only', () => (
    <InputText name="text" type="text" label="Ready Only Input Field" value="read only" readonly />
  ))
