import React from 'react'
import PropTypes from 'prop-types'
import ModalStyled from './Modal.styles'
import Icon from '../Icon'

const Modal = ({ children, hideHeader, isVisible, onClose, showClose, title, footer }) => (
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  hideHeader: PropTypes.bool,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  showClose: PropTypes.bool,
  title: PropTypes.string,
}

Modal.defaultProps = {
  footer: null,
  hideHeader: false,
  isVisible: true,
  onClose: () => undefined,
  showClose: true,
  title: null,
}

export default Modal
