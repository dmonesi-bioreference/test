import React from 'react'
import { action } from '@storybook/addon-actions'
import Flash from '.'

export default {
  component: Flash,
  title: 'Components/Flash',
}

export const defaultStory = () => <Flash message="This is a flash message." type="success" />

export const collapsableStory = () => (
  <Flash
    message="This is a flash message that can be closed."
    type="success"
    collapsable
    onCloseClick={action('onCloseClick')}
  />
)

export const error = () => <Flash message="This is a flash message." type="error" />
