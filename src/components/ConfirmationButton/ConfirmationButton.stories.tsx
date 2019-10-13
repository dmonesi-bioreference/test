import { action } from '@storybook/addon-actions'
import React from 'react'
import ConfirmationButton from '.'

export default {
  component: ConfirmationButton,
  title: 'Components/ConfirmationButton',
}

export const prompt = () => (
  <ConfirmationButton icon="trash" kind="black" size="medium" onClick={action('Deleted')}>
    Delete Entry
  </ConfirmationButton>
)

export const modal = () => (
  <ConfirmationButton
    icon="trash"
    kind="black"
    size="medium"
    confirmationType="modal"
    onClick={action('Deleted')}
  >
    Delete Entry
  </ConfirmationButton>
)
