import { action } from '@storybook/addon-actions';
import React from 'react';
import Modal from '.';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup';

const footerActions = () => (
  <ButtonGroup>
    <Button size="medium" onClick={action('footerCloseClick')}>
      Close
    </Button>
  </ButtonGroup>
);

export default {
  component: Modal,
  title: 'Components/Modal',
};

export const defaultStory = () => (
  <Modal isVisible={true} onClose={action('onCloseClick')}>
    Hello World
  </Modal>
);

export const withoutHeader = () => (
  <Modal isVisible={true} onClose={action('onCloseClick')} hideHeader={true}>
    Hello World
  </Modal>
);

export const withTitle = () => (
  <Modal isVisible={true} onClose={action('onCloseClick')} title="Modal Title">
    Hello World
  </Modal>
);

export const withTitleAndNoCloseButton = () => (
  <Modal isVisible={true} showClose={false} title="Modal Title">
    Hello World
  </Modal>
);

export const withFooter = () => (
  <Modal
    isVisible={true}
    onClose={action('onCloseClick')}
    title="Modal Title"
    footer={footerActions()}
  >
    Hello World
  </Modal>
);
