import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import FlashStyled from './Flash.styles'

const Flash = ({ collapsable, message, onCloseClick, type }) => {
  return (
    <FlashStyled data-type={type}>
      <div className="icon">
        {type === 'error' && <Icon name="exclamation-outline" />}
        {type === 'success' && <Icon name="checkmark" />}
      </div>
      <div className="message">{message}</div>
      {collapsable && (
        <div className="close">
          <button onClick={onCloseClick} type="button">
            <div className="visually-hidden">Close</div>
            <Icon name="close" />
          </button>
        </div>
      )}
    </FlashStyled>
  )
}

Flash.propTypes = {
  collapsable: PropTypes.bool,
  message: PropTypes.string.isRequired,
  /* eslint-disable react/destructuring-assignment */
  onCloseClick(props, propName) {
    if (
      props.collapsable === true &&
      (props[propName] === undefined || typeof props[propName] !== 'function')
    ) {
      return new Error('onCloseClick function is required if collapsable')
    }
    return null
  },
  /* eslint-enable react/destructuring-assignment */
  type: PropTypes.oneOf(['success', 'error']).isRequired,
}

Flash.defaultProps = {
  collapsable: false,
  onCloseClick: null,
}

export default Flash
