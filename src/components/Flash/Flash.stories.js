import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Flash from '.'

storiesOf('Components/Flash', module)
  .addParameters({ component: Flash })
  .add('default', () => <Flash message="This is a flash message." type="success" />)
  .add('collapsable', () => (
    <Flash
      message="This is a flash message that can be closed."
      type="success"
      collapsable
      onCloseClick={action('onCloseClick')}
    />
  ))
  .add('error', () => <Flash message="This is a flash message." type="error" />)
