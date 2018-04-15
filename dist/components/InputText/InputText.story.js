'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _react4 = require('@storybook/addon-knobs/react');

var _InputText = require('../InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Inputs/Text', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Text Input' });
}).add('password', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'password', type: 'password', label: 'Password Field' });
}).add('left icon', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Text Input w/ Left Icon', icon: (0, _react4.selectV2)('Icon', _Icon.iconArray, 'search', null) });
}).add('placeholder', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Text Input w/ Placeholder', placeholder: 'placeholder' });
}).add('hidden label', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Label', hideLabel: true, placeholder: 'hidden label field' });
}).add('error', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Text Input Error State', invalid: true, invalidMessage: 'This field is required.' });
}).add('disabled', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Disabled Input Field', disabled: true });
}).add('read only', function () {
  return _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Ready Only Input Field', value: 'read only', readonly: true });
});