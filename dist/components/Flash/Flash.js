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

var Flash = function Flash(_ref) {
  var collapsable = _ref.collapsable,
      message = _ref.message,
      onCloseClick = _ref.onCloseClick,
      type = _ref.type;

  var bemClass = 'c-flash--' + type;

  return _react2.default.createElement(
    'div',
    { className: bemClass },
    _react2.default.createElement(
      'div',
      { className: 'c-flash__icon' },
      type === 'error' && _react2.default.createElement(_Icon2.default, { name: 'error' }),
      type === 'success' && _react2.default.createElement(_Icon2.default, { name: 'checkmark' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'c-flash__message' },
      message
    ),
    collapsable && _react2.default.createElement(
      'div',
      { className: 'c-flash__close' },
      _react2.default.createElement(
        'button',
        { onClick: onCloseClick },
        _react2.default.createElement(_Icon2.default, { name: 'close' })
      )
    )
  );
};

Flash.propTypes = {
  collapsable: _propTypes2.default.bool,
  message: _propTypes2.default.string.isRequired,
  onCloseClick: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.oneOf(['success', 'error']).isRequired
};

Flash.defaultProps = {
  collapsable: false
};

exports.default = Flash;