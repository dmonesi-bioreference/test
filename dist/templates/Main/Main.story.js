'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonLinks = require('@storybook/addon-links');

var _Main = require('../Main');

var _Main2 = _interopRequireDefault(_Main);

var _Message = require('../../components/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Card = require('../../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _InputText = require('../../components/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _Button = require('../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Templates/Main', module).add('Example Form', function () {
  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      _Card2.default,
      { title: 'Register' },
      _react2.default.createElement(_Message2.default, { text: 'Please fill out this form to continue', icon: 'info' }),
      _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'First Name' }),
      _react2.default.createElement(_InputText2.default, { name: 'text', type: 'text', label: 'Last Name' }),
      _react2.default.createElement(_Button2.default, { type: 'primary', label: 'Submit', onClick: (0, _addonLinks.linkTo)('Templates/Main', 'Example Landing') })
    )
  );
}).add('Example Landing', function () {
  return _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(
      _Card2.default,
      { title: 'Welcome' },
      _react2.default.createElement(_Message2.default, { text: 'You are now signed in.', type: 'success', icon: 'checkmark' })
    )
  );
});