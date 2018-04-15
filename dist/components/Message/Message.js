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

var Message = function Message(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      type = _ref.type;

  var typeClass = type ? '--' + type : '';
  var bemClass = 'c-message' + typeClass;
  return _react2.default.createElement(
    'div',
    { className: bemClass },
    icon && _react2.default.createElement(_Icon2.default, { name: icon }),
    text
  );
};

Message.propTypes = {
  icon: _propTypes2.default.oneOf(_Icon.iconArray),
  text: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.oneOf(['info', 'error', 'success'])
};

Message.defaultProps = {
  icon: undefined,
  type: 'info'
};

exports.default = Message;