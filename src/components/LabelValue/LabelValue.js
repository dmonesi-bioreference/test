import React from 'react'
import PropTypes from 'prop-types'
import LabelValueStyled from './LabelValue.styles'

const LabelValue = ({ children, label, orientation, reverse, value }) => (
  <LabelValueStyled data-reverse={reverse} data-orientation={orientation}>
    <dt>{label}</dt>
    <dd>
      {value}
      {children}
    </dd>
  </LabelValueStyled>
)

LabelValue.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  reverse: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.instanceOf(Date)])
    .isRequired,
}

LabelValue.defaultProps = {
  children: null,
  orientation: 'vertical',
  reverse: false,
}

export default LabelValue
