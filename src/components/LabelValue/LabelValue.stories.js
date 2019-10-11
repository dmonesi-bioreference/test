import React from 'react'
import LabelValue from '.'

export default {
  component: LabelValue,
  title: 'Components/Label Value',
}

export const defaultStory = () => <LabelValue label="Phone Number" value="555-555-5555" />

export const reverseStory = () => <LabelValue label="Phone Number" value="555-555-5555" reverse />

export const horizontal = () => (
  <LabelValue label="Phone Number" value="555-555-5555" orientation="horizontal" />
)

export const horizontalReverse = () => (
  <LabelValue label="Phone Number" value="555-555-5555" reverse orientation="horizontal" />
)
