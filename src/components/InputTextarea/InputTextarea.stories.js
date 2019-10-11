import React from 'react'
import InputTextArea from '.'

export default {
  component: InputTextArea,
  title: 'Components/Inputs/Textarea',
}

export const defaultStory = () => <InputTextArea name="textarea" label="Text Area" />

export const boldWeightLabel = () => (
  <InputTextArea name="textarea" label="Text Area" labelStyle="emphasized" />
)

export const horizontalLayout = () => (
  <InputTextArea name="textarea" label="Text Area" orientation="horizontal" />
)

export const error = () => (
  <InputTextArea
    name="textarea"
    label="Text Area Error State"
    invalidMessage="This field is required."
    invalid
  />
)

export const disabledStory = () => (
  <InputTextArea name="textarea" label="Disabled Text Area Field" disabled />
)

export const readOnly = () => (
  <InputTextArea
    name="textarea"
    label="Ready Only Text Area Field"
    value="Ready only value"
    readonly
  />
)
