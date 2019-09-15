import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ConfirmationButton from '.'

storiesOf('Components/ConfirmationButton', module)
  .addParameters({ component: ConfirmationButton })
  .add('prompt', () => (
    <ConfirmationButton icon="trash" kind="black" size="medium" onClick={action('Deleted')}>
      Delete Entry
    </ConfirmationButton>
  ))
  .add('modal', () => (
    <ConfirmationButton
      icon="trash"
      kind="black"
      size="medium"
      confirmationType="modal"
      onClick={action('Deleted')}
    >
      Delete Entry
    </ConfirmationButton>
  ))
