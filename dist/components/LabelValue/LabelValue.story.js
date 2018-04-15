'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookAddonSmartKnobs = require('storybook-addon-smart-knobs');

var _LabelValue = require('../LabelValue');

var _LabelValue2 = _interopRequireDefault(_LabelValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Components/Label Value', module).addDecorator(_storybookAddonSmartKnobs.withSmartKnobs).add('default', function () {
  return _react2.default.createElement(_LabelValue2.default, { label: 'Phone Number', value: '555-555-5555' });
}).add('reverse', function () {
  return _react2.default.createElement(_LabelValue2.default, { label: 'Phone Number', value: '555-555-5555', reverse: true });
});