import React from 'react'
import InputText from '.'

export default {
  component: InputText,
  title: 'Components/Inputs/Text',
}

export const defaultStory = () => <InputText name="text" type="text" label="Text Input" />

export const horizontalLayout = () => (
  <InputText name="text" type="text" label="Text Input" orientation="horizontal" />
)

export const boldWeightLabel = () => (
  <InputText name="text" type="text" label="Text Input" labelStyle="emphasized" />
)

export const password = () => <InputText name="password" type="password" label="Password Field" />

export const leftIcon = () => (
  <InputText name="text" type="text" label="Text Input w/ Left Icon" icon="search" />
)

export const placeholderStory = () => (
  <InputText name="text" type="text" label="Text Input w/ Placeholder" placeholder="placeholder" />
)

export const hiddenLabel = () => (
  <InputText
    name="text"
    type="text"
    label="Label"
    hideLabel={true}
    placeholder="hidden label field"
  />
)

export const error = () => (
  <InputText
    name="text"
    type="text"
    label="Text Input Error State"
    invalid={true}
    invalidMessage="This field is required."
  />
)

export const disabledStory = () => (
  <InputText name="text" type="text" label="Disabled Input Field" disabled={true} />
)

export const readOnly = () => (
  <InputText
    name="text"
    type="text"
    label="Ready Only Input Field"
    value="read only"
    readonly={true}
  />
)
