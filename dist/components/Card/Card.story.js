'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Components/Card', module).add('basic', function () {
  return _react2.default.createElement(_Card2.default, { title: 'Card', content: 'Card with basic content' });
}).add('with component', function () {
  return _react2.default.createElement(
    _Card2.default,
    { title: 'Card with Component' },
    _react2.default.createElement(_Button2.default, { label: 'Button' })
  );
});