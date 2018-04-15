'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'tbody',
    null,
    children
  );
};

TableBody.propTypes = {
  children: _propTypes2.default.node.isRequired
};

TableBody.defaultProps = {};

exports.default = TableBody;