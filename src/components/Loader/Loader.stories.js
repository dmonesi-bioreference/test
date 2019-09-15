import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader from '.'

storiesOf('Components/Loader', module)
  .addParameters({ component: Loader })
  .add('primary small', () => <Loader color="primary" size="small" />)
  .add('primary medium', () => <Loader color="primary" size="medium" />)
  .add('primary large', () => <Loader color="primary" size="large" />)
  .add('secondary small', () => <Loader color="secondary" size="small" />)
  .add('secondary medium', () => <Loader color="secondary" size="medium" />)
  .add('secondary large', () => <Loader color="secondary" size="large" />)
