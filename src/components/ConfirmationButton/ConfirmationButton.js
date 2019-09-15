import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import ConfirmationButtonStyled from './ConfirmationButton.styles'
import Modal from '../Modal'
import ButtonGroup from '../ButtonGroup'

const ConfirmationButton = ({
  confirmationAction,
  confirmationActionKind,
  confirmationType,
  confirmationText,
  exitAction,
  exitActionKind,
  onClick,
  size,
  ...buttonProps
} = {}) => {
  const [confirm, setConfirm] = useState(false)

  const confirmationButtons = (
    <ButtonGroup>
      <Button
        kind={confirmationActionKind}
        size={size}
        onClick={() => {
          onClick()
          setConfirm(false)
        }}
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

ConfirmationButton.propTypes = {
  ...Button.propTypes,
  confirmationAction: PropTypes.string,
  confirmationActionKind: Button.propTypes.kind,
  confirmationText: PropTypes.string,
  confirmationType: PropTypes.oneOf(['prompt', 'modal']),
  exitAction: PropTypes.string,
  exitActionKind: Button.propTypes.kind,
}

ConfirmationButton.defaultProps = {
  ...Button.defaultProps,
  confirmationAction: 'Confirm',
  confirmationActionKind: 'primary',
  confirmationText: 'Are you sure?',
  confirmationType: 'prompt',
  exitAction: 'Cancel',
  exitActionKind: 'secondary',
}

export default ConfirmationButton
