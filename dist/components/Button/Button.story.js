'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _react4 = require('@storybook/addon-knobs/react');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('primary', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Primary Button', type: 'primary' });
}).add('primary with icon', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Primary Icon Button', type: 'primary', icon: (0, _react4.selectV2)('Icon', _Icon.iconArray, 'checkmark', null) });
}).add('medium button', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Medium Primary Button', type: 'primary', size: 'medium' });
}).add('small button', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Small Primary Button', type: 'primary', size: 'small' });
}).add('secondary', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Secondary Button', type: 'secondary' });
}).add('black', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Black Button', type: 'black' });
}).add('outline', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Outline Button', type: 'outline' });
}).add('danger', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Danger Button', type: 'danger' });
}).add('disabled', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Disabled Button', disabled: true });
}).add('text', function () {
  return _react2.default.createElement(_Button2.default, { label: 'Text Button', type: 'text' });
});