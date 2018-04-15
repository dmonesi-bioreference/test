'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _InputSelect = require('../InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{ name: 'Option 1', value: 'option1' }, { name: 'Option 2', value: 'option2' }, { name: 'Option 3', value: 'option3' }];

(0, _react3.storiesOf)('Inputs/Select', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_InputSelect2.default, { name: 'select', label: 'Select Label', options: options });
});