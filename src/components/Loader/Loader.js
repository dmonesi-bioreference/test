import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-svg-spinner'
import t from '../GlobalStyle/01_settings/tokens'

const Loader = ({ color, size }) => {
  let tokenizedColor
  let tokenizedSize

  switch (color) {
    case 'primary':
      tokenizedColor = t.colorPrimary
      break
    case 'secondary':
      tokenizedColor = t.colorSecondary
      break
    default:
      break
  }

  switch (size) {
    case 'small':
      tokenizedSize = '16px'
      break
    case 'medium':
      tokenizedSize = '32px'
      break
    case 'large':
      tokenizedSize = '48px'
      break
    default:
      break
  }

  return <Spinner size={tokenizedSize} color={tokenizedColor} />
}
Loader.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Loader.defaultProps = {
  color: 'primary',
  size: 'medium',
}

export default Loader
