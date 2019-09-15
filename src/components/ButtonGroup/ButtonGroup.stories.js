import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ButtonGroup from '.'
import Button from '../Button/Button'

storiesOf('Components/ButtonGroup', module)
  .addParameters({ component: ButtonGroup })
  .add('default', () => (
    <ButtonGroup>
      <Button onClick={action('save-click')}>Save</Button>
      <Button onClick={action('cancel-click')} kind="secondary">
        Cancel
      </Button>
    </ButtonGroup>
  ))
