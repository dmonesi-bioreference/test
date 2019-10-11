import React from 'react'
import { select } from '@storybook/addon-knobs/react'
import Message from '.'
import { iconArray } from '../Icon'

export default {
  component: Message,
  title: 'Components/Message',
}

export const defaultStory = () => (
  <Message icon={select('Icon', iconArray, undefined, null)}>Message text goes here.</Message>
)

export const info = () => (
  <Message type="info" icon={select('Icon', iconArray, 'information-outline', null)}>
    Message text goes here.
  </Message>
)

export const error = () => (
  <Message type="error" icon={select('Icon', iconArray, 'exclamation-outline', null)}>
    Message text goes here.
  </Message>
)

export const warning = () => (
  <Message type="warning" icon={select('Icon', iconArray, 'flag', null)}>
    Message text goes here.
  </Message>
)

export const success = () => (
  <Message type="success" icon={select('Icon', iconArray, 'checkmark', null)}>
    Message text goes here.
  </Message>
)
