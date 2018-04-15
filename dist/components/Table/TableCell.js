'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      header = _ref.header,
      scope = _ref.scope;

  var bemClass = 'c-table__column';

  if (header) {
    return _react2.default.createElement(
      'th',
      { className: bemClass, scope: scope },
      children
    );
  }
  return _react2.default.createElement(
    'td',
    { className: bemClass },
    children
  );
};

TableCell.propTypes = {
  children: _propTypes2.default.node.isRequired,
  header: _propTypes2.default.bool,
  scope: _propTypes2.default.oneOf(['row', 'col'])
};

TableCell.defaultProps = {
  header: false,
  scope: null
};

exports.default = TableCell;