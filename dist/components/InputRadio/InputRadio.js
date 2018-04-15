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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputRadio = function InputRadio(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      invalid = _ref.invalid,
      invalidMessage = _ref.invalidMessage,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      readonly = _ref.readonly;

  var invalidClass = invalid ? '--has-errors' : '';
  var bemClass = 'o-input' + invalidClass;

  return _react2.default.createElement(
    'label',
    { className: bemClass },
    _react2.default.createElement('input', {
      defaultChecked: checked,
      disabled: disabled,
      name: name,
      onChange: onChange,
      readOnly: readonly,
      type: 'radio'
    }),
    _react2.default.createElement('span', { className: 'o-input-focus' }),
    label,
    invalid && _react2.default.createElement(_Message2.default, { icon: 'error', text: invalidMessage, type: 'error' })
  );
};

InputRadio.propTypes = {
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  invalidMessage: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  readonly: _propTypes2.default.bool
};

InputRadio.defaultProps = {
  checked: false,
  disabled: false,
  invalid: false,
  invalidMessage: null,
  onChange: function onChange() {},
  readonly: false
};

exports.default = InputRadio;