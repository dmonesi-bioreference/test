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

var Select = function Select(_ref) {
  var disabled = _ref.disabled,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidMessage = _ref.invalidMessage,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      options = _ref.options,
      readonly = _ref.readonly;

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
    _react2.default.createElement(
      'select',
      {
        disabled: disabled,
        name: name,
        onChange: onChange,
        readOnly: readonly
      },
      options.map(function (option) {
        return _react2.default.createElement(
          'option',
          { key: option.value.toString(), value: option.value },
          option.name
        );
      })
    ),
    invalid && _react2.default.createElement(_Message2.default, { icon: 'error', text: invalidMessage, type: 'error' })
  );
};

Select.propTypes = {
  disabled: _propTypes2.default.bool,
  hideLabel: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  invalidMessage: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  readonly: _propTypes2.default.bool
};

Select.defaultProps = {
  disabled: false,
  hideLabel: false,
  invalid: false,
  invalidMessage: null,
  onChange: function onChange() {},
  readonly: false
};

exports.default = Select;