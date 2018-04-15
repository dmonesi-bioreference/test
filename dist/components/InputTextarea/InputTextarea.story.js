'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _InputTextarea = require('../InputTextarea');

var _InputTextarea2 = _interopRequireDefault(_InputTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Components/Inputs/Textarea', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_InputTextarea2.default, { name: 'textarea', label: 'Text Area' });
}).add('error', function () {
  return _react2.default.createElement(_InputTextarea2.default, { name: 'textarea', label: 'Text Area Error State', invalidMessage: 'This field is required.', invalid: true });
}).add('disabled', function () {
  return _react2.default.createElement(_InputTextarea2.default, { name: 'textarea', label: 'Disabled Text Area Field', disabled: true });
}).add('read only', function () {
  return _react2.default.createElement(_InputTextarea2.default, { name: 'textarea', label: 'Ready Only Text Area Field', value: 'Ready only value', readonly: true });
});