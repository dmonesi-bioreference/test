'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _Flash = require('../Flash');

var _Flash2 = _interopRequireDefault(_Flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Components/Flash', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_Flash2.default, { message: 'This is a flash message.', type: 'success' });
}).add('collapsable', function () {
  return _react2.default.createElement(_Flash2.default, { message: 'This is a flash message that can be closed.', type: 'success', collapsable: true });
}).add('error', function () {
  return _react2.default.createElement(_Flash2.default, { message: 'This is a flash message.', type: 'error' });
});