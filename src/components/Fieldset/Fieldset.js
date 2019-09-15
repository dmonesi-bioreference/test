import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'

const Fieldset = ({
  children,
  childrenOrientation,
  disabled,
  hideLegend,
  invalid,
  invalidMessage,
  label,
  labelSize,
  labelStyle,
  orientation,
  required,
}) => {
  const invalidClass = invalid ? '--has-errors' : ''
  const hideLegendClass = hideLegend ? 'o-input--hidden-legend' : ''
  const bemClass = `o-input${invalidClass}`

  return (
    <fieldset className={bemClass} disabled={disabled} data-orientation={orientation}>
      <legend className={hideLegendClass} data-size={labelSize} data-style={labelStyle}>
        <span>
          {label}
          {required && <span>*</span>}
        </span>
      </legend>
      <div data-children-orientation={childrenOrientation}>{children}</div>
      {invalid && invalidMessage && (
        <Message icon="error" type="error">
          {invalidMessage}
        </Message>
      )}
    </fieldset>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  childrenOrientation: PropTypes.oneOf(['vertical', 'horizontal']),
  disabled: PropTypes.bool,
  hideLegend: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelSize: PropTypes.oneOf(['small', 'large']),
  labelStyle: PropTypes.oneOf(['normal', 'emphasized', 'header']),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  required: PropTypes.bool,
}

Fieldset.defaultProps = {
  childrenOrientation: 'vertical',
  disabled: false,
  hideLegend: false,
  invalid: false,
  invalidMessage: null,
  labelSize: 'small',
  labelStyle: 'emphasized',
  orientation: 'vertical',
  required: false,
}

export default Fieldset
