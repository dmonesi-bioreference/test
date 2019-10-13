import React, { FC, useState } from 'react'
import Button, { ButtonProps } from '../Button/Button'
import ButtonGroup from '../ButtonGroup'
import Modal from '../Modal'
import ConfirmationButtonStyled from './ConfirmationButton.styles'

interface ConfirmationButtonProps extends ButtonProps {
  confirmationAction?: string
  confirmationActionKind?: ButtonProps['kind']
  confirmationText?: string
  confirmationType?: 'prompt' | 'modal'
  exitAction?: string
  exitActionKind?: ButtonProps['kind']
}

const ConfirmationButton: FC<ConfirmationButtonProps> = ({
  confirmationAction = 'Confirm',
  confirmationActionKind = 'primary',
  confirmationType = 'prompt',
  confirmationText = 'Are you sure?',
  exitAction = 'Cancel',
  exitActionKind = 'secondary',
  onClick,
  size,
  ...buttonProps
} = {}) => {
  const [confirm, setConfirm] = useState(false)

  const handleConfirmationButtonClick = () => {
    if (onClick) {
      onClick()
    }
    setConfirm(false)
  }

  const confirmationButtons = (
    <ButtonGroup>
      <Button
        kind={confirmationActionKind}
        size={size}
        onClick={handleConfirmationButtonClick}
        // onClick={() => {
        //   onClick()
        //   setConfirm(false)
        // }}
      >
        {confirmationAction}
      </Button>
      <Button kind={exitActionKind} size={size} onClick={() => setConfirm(false)}>
        {exitAction}
      </Button>
    </ButtonGroup>
  )

  const confirmationPrompt = (
    <div className="confirmation--prompt">
      {confirmationText}
      {confirmationButtons}
    </div>
  )

  const confirmationModal = (
    <Modal title="Confirm Action" showClose={false} footer={confirmationButtons}>
      {confirmationText}
    </Modal>
  )

  const confirmation = () => {
    switch (confirmationType) {
      case 'modal':
        return confirmationModal
      case 'prompt':
      default:
        return confirmationPrompt
    }
  }

  return (
    <ConfirmationButtonStyled>
      {confirm ? (
        confirmation()
      ) : (
        <Button {...buttonProps} size={size} onClick={() => setConfirm(true)} />
      )}
    </ConfirmationButtonStyled>
  )
}

export default ConfirmationButton
