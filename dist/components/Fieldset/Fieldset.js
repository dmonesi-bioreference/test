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

var Fieldset = function Fieldset(_ref) {
  var children = _ref.children,
      invalid = _ref.invalid,
      invalidMessage = _ref.invalidMessage,
      label = _ref.label;

  var invalidClass = invalid ? '--has-errors' : '';
  var bemClass = 'o-input' + invalidClass;

  return _react2.default.createElement(
    'fieldset',
    { className: bemClass },
    _react2.default.createElement(
      'legend',
      null,
      label
    ),
    children,
    invalid && _react2.default.createElement(_Message2.default, { icon: 'error', text: invalidMessage, type: 'error' })
  );
};

Fieldset.propTypes = {
  children: _propTypes2.default.node.isRequired,
  invalid: _propTypes2.default.bool,
  invalidMessage: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired
};

Fieldset.defaultProps = {
  invalid: false,
  invalidMessage: null
};

exports.default = Fieldset;