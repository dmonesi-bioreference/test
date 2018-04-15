'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelValue = function LabelValue(_ref) {
  var children = _ref.children,
      label = _ref.label,
      reverse = _ref.reverse,
      value = _ref.value;

  var reverseClass = reverse ? '--reverse' : '';
  var bemClass = 'c-label-value' + reverseClass;

  return _react2.default.createElement(
    'dl',
    { className: bemClass },
    _react2.default.createElement(
      'dt',
      { className: 'c-label-value__label' },
      label
    ),
    _react2.default.createElement(
      'dd',
      { className: 'c-label-value__value' },
      value,
      children
    )
  );
};

LabelValue.propTypes = {
  children: _propTypes2.default.node,
  label: _propTypes2.default.string.isRequired,
  reverse: _propTypes2.default.bool,
  value: _propTypes2.default.string
};

LabelValue.defaultProps = {
  children: null,
  reverse: false,
  value: null
};

exports.default = LabelValue;