'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(_ref) {
  var children = _ref.children;

  var bemClass = 'c-table__row';

  return _react2.default.createElement(
    'tr',
    { className: bemClass },
    children
  );
};

TableRow.propTypes = {
  children: _propTypes2.default.node.isRequired
};

TableRow.defaultProps = {};

exports.default = TableRow;