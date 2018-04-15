'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../../components/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      icon = _ref.icon,
      label = _ref.label,
      onClick = _ref.onClick,
      size = _ref.size,
      type = _ref.type;

  var typeClass = type ? '--' + type : '';
  var sizeClass = size ? 'c-btn--' + size : '';
  var bemClass = 'c-btn' + typeClass + ' ' + sizeClass;

  return _react2.default.createElement(
    'button',
    { className: bemClass, disabled: disabled, onClick: onClick },
    icon && _react2.default.createElement(_Icon2.default, { name: icon }),
    label
  );
};

Button.propTypes = {
  disabled: _propTypes2.default.bool,
  icon: _propTypes2.default.oneOf(_Icon.iconArray),
  label: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  type: _propTypes2.default.oneOf(['primary', 'secondary', 'outline', 'black', 'danger', 'text'])
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  onClick: null,
  size: 'large',
  type: 'primary'
};

exports.default = Button;