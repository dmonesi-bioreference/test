'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var children = _ref.children,
      content = _ref.content,
      title = _ref.title;

  return _react2.default.createElement(
    'div',
    { className: 'c-card' },
    _react2.default.createElement(
      'header',
      { className: 'c-card__header' },
      _react2.default.createElement(
        'div',
        { className: 'c-card__title' },
        title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'c-card__body' },
      children,
      content
    )
  );
};

Card.propTypes = {
  children: _propTypes2.default.node,
  content: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired
};

Card.defaultProps = {
  children: null,
  content: null
};

exports.default = Card;