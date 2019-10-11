import React from 'react'
import Modal from '.'
import ButtonGroup from '../ButtonGroup'
import Button from '../Button'

const footerActions = () => (
  <ButtonGroup>
    <Button size="medium">Close</Button>
  </ButtonGroup>
)

export default {
  component: Modal,
  title: 'Components/Modal',
}

export const defaultStory = () => (
  <Modal isVisible onClose={() => undefined}>
    Hello World
  </Modal>
)

export const withoutHeader = () => (
  <Modal isVisible onClose={() => undefined} hideHeader>
    Hello World
  </Modal>
)

export const withTitle = () => (
  <Modal isVisible onClose={() => undefined} title="Modal Title">
    Hello World
  </Modal>
)

export const withTitleAndNoCloseButton = () => (
  <Modal isVisible showClose={false} title="Modal Title">
    Hello World
  </Modal>
)

export const withFooter = () => (
  <Modal isVisible onClose={() => undefined} title="Modal Title" footer={footerActions()}>
    Hello World
  </Modal>
)
