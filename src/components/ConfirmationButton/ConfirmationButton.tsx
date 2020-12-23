import React, { FC, useEffect, useState, useRef } from 'react';
import Modal from '../Modal';
import ConfirmationButtonStyled from './ConfirmationButton.styles';

interface ConfirmationButtonProps {
  type?: 'inline' | 'dialog';
  prompt?: string;
  confirmButton: React.ReactNode;
  cancelButton: React.ReactNode;
  onConfirm: () => void;
}

const ConfirmationButton: FC<ConfirmationButtonProps> = (props) => {
  const [confirm, setConfirm] = useState(false);
  const triggerWrap = useRef<HTMLDivElement>(null);
  const confirmWrap = useRef<HTMLDivElement>(null);
  const cancelWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    triggerWrap.current?.firstChild?.addEventListener(
      'click',
      handleTriggerClick
    );
    confirmWrap.current?.firstChild?.addEventListener(
      'click',
      handleConfirmClick
    );
    cancelWrap.current?.firstChild?.addEventListener(
      'click',
      handleCancelClick
    );
  });

  const handleConfirmClick = () => {
    if (props.onConfirm) {
      props.onConfirm();
    }
    setConfirm(false);
  };

  const handleCancelClick = () => {
    setConfirm(false);
  };

  const handleTriggerClick = () => {
    setConfirm(true);
  };

  const confirmationButtons = (
    <>
      <span ref={confirmWrap} className="confirmation-button__confirm-button">
        {props.confirmButton}
      </span>
      <span ref={cancelWrap} className="confirmation-button__cancel-button">
        {props.cancelButton}
      </span>
    </>
  );

  const confirmationPrompt = (
    <div className="confirmation-button__confirm">
      <span className="confirmation-button__prompt">{props.prompt}</span>
      {confirmationButtons}
    </div>
  );

  const confirmationDialog = (
    <Modal
      title="Confirm Action"
      showClose={false}
      footer={confirmationButtons}
    >
      {props.prompt}
    </Modal>
  );

  const confirmation = () => {
    switch (props.type) {
      case 'dialog':
        return confirmationDialog;
      case 'inline':
      default:
        return confirmationPrompt;
    }
  };

  return (
    <ConfirmationButtonStyled>
      {confirm && confirmation()}
      <div
        className="confirmation-button__trigger"
        hidden={confirm && props.type === 'inline'}
        ref={triggerWrap}
      >
        {props.children}
      </div>
    </ConfirmationButtonStyled>
  );
};

export default ConfirmationButton;
