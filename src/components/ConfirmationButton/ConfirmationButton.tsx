import { FC, useEffect, useState, useRef } from 'react';
import Dialog from '../Dialog/Dialog';
import ConfirmationButtonStyled from './ConfirmationButton.styles';

interface ConfirmationButtonProps {
  /** Specifies the type of confirmation UI to present to the user. */
  type?: 'inline' | 'dialog';
  /** Optionally customize the confirmation message. */
  prompt?: string;
  /** The button that confirms the action. */
  confirmButton: React.ReactNode;
  /** The button that cancels the action. */
  cancelButton: React.ReactNode;
  /** The action to perform upon confirmation. */
  onConfirm: () => void;
}

const defaultProps: Partial<ConfirmationButtonProps> = {
  type: 'inline',
  prompt: 'Are you sure?',
};

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
  }, []);

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
    <div
      className="confirmation-button__confirm"
      hidden={!confirm ? true : undefined}
    >
      <span className="confirmation-button__prompt">{props.prompt}</span>
      {confirmationButtons}
    </div>
  );

  const confirmationDialog = (
    <Dialog
      title="Confirm Action"
      hideHeader={true}
      footer={confirmationButtons}
      open={confirm}
      onClose={() => setConfirm(false)}
    >
      {props.prompt}
    </Dialog>
  );

  return (
    <ConfirmationButtonStyled>
      {props.type === 'inline' && confirmationPrompt}
      {props.type === 'dialog' && confirmationDialog}
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

ConfirmationButton.defaultProps = defaultProps;

export default ConfirmationButton;
