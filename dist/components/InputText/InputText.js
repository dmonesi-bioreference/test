'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Message = require('../../components/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Icon = require('../../components/Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputText = function InputText(_ref) {
  var disabled = _ref.disabled,
      hideLabel = _ref.hideLabel,
      icon = _ref.icon,
      invalid = _ref.invalid,
      invalidMessage = _ref.invalidMessage,
      label = _ref.label,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      type = _ref.type,
      value = _ref.value;

  var invalidClass = invalid ? '--has-errors' : '';
  var hideLabelClass = hideLabel ? 'o-input--hidden-label' : '';
  var bemClass = 'o-input' + invalidClass + ' ' + hideLabelClass;

  return _react2.default.createElement(
    'label',
    { className: bemClass },
    _react2.default.createElement(
      'span',
      null,
      label
    ),
    _react2.default.createElement('input', {
      'data-icon': icon,
      disabled: disabled,
      name: name,
      onBlur: onBlur,
      onFocus: onFocus,
      placeholder: placeholder,
      readOnly: readonly,
      type: type,
      value: value
    }),
    invalid && _react2.default.createElement(_Message2.default, { icon: 'error', text: invalidMessage, type: 'error' })
  );
};

InputText.propTypes = {
  disabled: _propTypes2.default.bool,
  hideLabel: _propTypes2.default.bool,
  icon: _propTypes2.default.oneOf(_Icon.iconArray),
  invalid: _propTypes2.default.bool,
  invalidMessage: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  readonly: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['email', 'number', 'password', 'search', 'tel', 'url', 'text']).isRequired,
  value: _propTypes2.default.string
};

InputText.defaultProps = {
  disabled: false,
  hideLabel: false,
  icon: null,
  invalid: false,
  invalidMessage: null,
  onBlur: null,
  onFocus: null,
  placeholder: null,
  readonly: false,
  value: undefined
};

exports.default = InputText;