import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

const Icon = ({
  name,
}) => (
  <div className="c-icon">
    <SVG src={`/icons/${name}.svg`} />
  </div>
);

export const iconArray = [
  '--',
  'add',
  'arrowdown',
  'chat',
  'checkmark',
  'close',
  'date',
  'edit',
  'email',
  'error',
  'expand',
  'info',
  'lock',
  'noentry',
  'overflow',
  'search',
  'signout',
  'trash',
  'upload',
];

Icon.propTypes = {
  name: PropTypes.oneOf(iconArray).isRequired,
};

Icon.defaultProps = {
};

export default Icon;
