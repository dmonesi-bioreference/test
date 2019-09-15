import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from '.'
import ButtonGroup from '../ButtonGroup'
import Button from '../Button'

const footerActions = () => (
  <ButtonGroup>
    <Button size="medium">Close</Button>
  </ButtonGroup>
)

storiesOf('Components/Modal', module)
  .addParameters({ component: Modal })
  .add('default', () => (
    <Modal isVisible onClose={() => undefined}>
      Hello World
    </Modal>
  ))
  .add('without header', () => (
    <Modal isVisible onClose={() => undefined} hideHeader>
      Hello World
    </Modal>
  ))
  .add('with title', () => (
    <Modal isVisible onClose={() => undefined} title="Modal Title">
      Hello World
    </Modal>
  ))
  .add('with title and no close button', () => (
    <Modal isVisible showClose={false} title="Modal Title">
      Hello World
    </Modal>
  ))
  .add('with footer', () => (
    <Modal isVisible onClose={() => undefined} title="Modal Title" footer={footerActions()}>
      Hello World
    </Modal>
  ))
