import React, { FC } from 'react'
import Icon from '../Icon'
import ModalStyled from './Modal.styles'

interface ModalProps {
  footer?: React.ReactNode
  hideHeader?: boolean
  isVisible?: boolean
  onClose?: () => void
  showClose?: boolean
  title?: string
}

const Modal: FC<ModalProps> = ({
  children,
  hideHeader,
  isVisible = true,
  onClose,
  showClose = true,
  title,
  footer,
}) => (
  <ModalStyled isVisible={isVisible} title={title} hideHeader={hideHeader}>
    <dialog open={isVisible} className="modal-content" aria-labelledby="dialogTitle">
      <header id="dialogTitle">
        {title && <h4>{title}</h4>}

        {showClose && (
          <button type="button" name="close" onClick={onClose}>
            <Icon name="close" />
            <span className="visually-hidden">Close</span>
          </button>
        )}
      </header>
      <div className="content">{children}</div>
      {footer && <footer>{footer}</footer>}
    </dialog>
  </ModalStyled>
)

export default Modal
