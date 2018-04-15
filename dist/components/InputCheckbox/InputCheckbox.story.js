'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _InputCheckbox = require('../InputCheckbox');

var _InputCheckbox2 = _interopRequireDefault(_InputCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Inputs/Checkbox', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_InputCheckbox2.default, { name: 'checkbox1', label: 'Checkbox Input' });
});