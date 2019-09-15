import React from 'react'
import { storiesOf } from '@storybook/react'
import LoadingOverlay from '.'

storiesOf('Components/LoadingOverlay', module)
  .addParameters({ component: LoadingOverlay })
  .add('default', () => <LoadingOverlay />)
