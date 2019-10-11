import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from '.'

storiesOf('Components/Button', module)
  .addParameters({ component: Button })
  .add('primary', () => (
    <Button kind="primary" onClick={action('button-click')}>
      Primary Button
    </Button>
  ))
  .add('primary with icon', () => (
    <Button kind="primary" icon="checkmark" onClick={action('button-click')}>
      Primary Icon Button
    </Button>
  ))
  .add('medium button', () => (
    <Button kind="primary" size="medium" onClick={action('button-click')}>
      Medium Primary Button
    </Button>
  ))
  .add('small button', () => (
    <Button kind="primary" size="small" onClick={action('button-click')}>
      Small Primary Button
    </Button>
  ))
  .add('secondary', () => (
    <Button kind="secondary" onClick={action('button-click')}>
      Secondary Button
    </Button>
  ))
  .add('black', () => (
    <Button kind="black" onClick={action('button-click')}>
      Black Button
    </Button>
  ))
  .add('danger', () => (
    <Button kind="danger" onClick={action('button-click')}>
      Danger Button
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled={true} onClick={action('button-click')}>
      Disabled Button
    </Button>
  ))
  .add('text', () => (
    <Button kind="text" onClick={action('button-click')}>
      Text Button
    </Button>
  ))
  .add('text - danger', () => (
    <Button kind="text-danger" onClick={action('button-click')}>
      Danger Text Button
    </Button>
  ))
  .add('text with icon', () => (
    <Button kind="text" icon="duplicate" onClick={action('button-click')}>
      Text Button
    </Button>
  ))
