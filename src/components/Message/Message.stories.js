import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs/react'
import Message from '.'
import { iconArray } from '../Icon'

storiesOf('Components/Message', module)
  .addParameters({ component: Message })
  .add('default', () => (
    <Message icon={select('Icon', iconArray, undefined, null)}>Message text goes here.</Message>
  ))
  .add('info', () => (
    <Message type="info" icon={select('Icon', iconArray, 'information-outline', null)}>
      Message text goes here.
    </Message>
  ))
  .add('error', () => (
    <Message type="error" icon={select('Icon', iconArray, 'exclamation-outline', null)}>
      Message text goes here.
    </Message>
  ))
  .add('warning', () => (
    <Message type="warning" icon={select('Icon', iconArray, 'flag', null)}>
      Message text goes here.
    </Message>
  ))
  .add('success', () => (
    <Message type="success" icon={select('Icon', iconArray, 'checkmark', null)}>
      Message text goes here.
    </Message>
  ))
