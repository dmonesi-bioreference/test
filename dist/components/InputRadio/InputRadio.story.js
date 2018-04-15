'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _InputRadio = require('../InputRadio');

var _InputRadio2 = _interopRequireDefault(_InputRadio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Components/Inputs/Radio', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_InputRadio2.default, { name: 'radio1', label: 'Radio Input' });
});