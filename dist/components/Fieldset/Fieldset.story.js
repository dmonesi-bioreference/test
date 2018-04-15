'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Fieldset = require('../Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _InputCheckbox = require('../InputCheckbox');

var _InputCheckbox2 = _interopRequireDefault(_InputCheckbox);

var _InputRadio = require('../InputRadio');

var _InputRadio2 = _interopRequireDefault(_InputRadio);

var _InputText = require('../InputText');

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Inputs/Fieldset', module).add('with text inputs', function () {
  return _react2.default.createElement(
    _Fieldset2.default,
    { label: 'Fieldset Label' },
    _react2.default.createElement(_InputText2.default, { name: 'field1', type: 'text', label: 'Field One' }),
    _react2.default.createElement(_InputText2.default, { name: 'field2', type: 'text', label: 'Field Two' })
  );
}).add('with checkboxes', function () {
  return _react2.default.createElement(
    _Fieldset2.default,
    { label: 'Fieldset Label' },
    _react2.default.createElement(_InputCheckbox2.default, { name: 'checkbox1', label: 'Checkbox One' }),
    _react2.default.createElement(_InputCheckbox2.default, { name: 'checkbox2', label: 'Checkbox Two' })
  );
}).add('with radio buttons', function () {
  return _react2.default.createElement(
    _Fieldset2.default,
    { label: 'Fieldset Label' },
    _react2.default.createElement(_InputRadio2.default, { name: 'radio1', label: 'Radio One' }),
    _react2.default.createElement(_InputRadio2.default, { name: 'radio1', label: 'Radio Two' })
  );
});