'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var caption = _ref.caption,
      children = _ref.children;

  var bemClass = 'c-table';

  return _react2.default.createElement(
    'table',
    { className: bemClass },
    _react2.default.createElement(
      'caption',
      null,
      caption
    ),
    children
  );
};

Table.propTypes = {
  caption: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

Table.defaultProps = {};

exports.default = Table;