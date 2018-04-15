'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _react4 = require('@storybook/addon-knobs/react');

var _Message = require('../Message');

var _Message2 = _interopRequireDefault(_Message);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Components/Message', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_Message2.default, { text: 'Message text goes here.', icon: (0, _react4.selectV2)('Icon', _Icon.iconArray, undefined, null) });
}).add('info', function () {
  return _react2.default.createElement(_Message2.default, { text: 'Message text goes here.', type: 'info', icon: (0, _react4.selectV2)('Icon', _Icon.iconArray, 'info', null) });
}).add('error', function () {
  return _react2.default.createElement(_Message2.default, { text: 'Message text goes here.', type: 'error', icon: (0, _react4.selectV2)('Icon', _Icon.iconArray, 'error', null) });
}).add('success', function () {
  return _react2.default.createElement(_Message2.default, { text: 'Message text goes here.', type: 'success', icon: (0, _react4.selectV2)('Icon', _Icon.iconArray, 'checkmark', null) });
});