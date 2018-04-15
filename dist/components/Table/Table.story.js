'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Table = require('../Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Components/Table', module).add('default', function () {
  return _react2.default.createElement(
    _Table2.default,
    { caption: 'Table Data' },
    _react2.default.createElement(
      _Table.TableHeader,
      null,
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableCell,
          { header: true, scope: 'col' },
          'Name'
        ),
        _react2.default.createElement(
          _Table.TableCell,
          { header: true, scope: 'col' },
          'Email'
        )
      )
    ),
    _react2.default.createElement(
      _Table.TableBody,
      null,
      _react2.default.createElement(
        _Table.TableRow,
        null,
        _react2.default.createElement(
          _Table.TableCell,
          { header: true, scope: 'row' },
          'John Appleseed'
        ),
        _react2.default.createElement(
          _Table.TableCell,
          null,
          'jappleseed@example.com'
        )
      )
    )
  );
});