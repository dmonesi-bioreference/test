import React from 'react';
import PropTypes from 'prop-types';
import Icon, { iconArray } from '../../components/Icon';

const Message = ({
  icon,
  text,
  type,
}) => {
  const typeClass = type ? `--${type}` : '';
  const bemClass = `c-message${typeClass}`;
  return (
    <div className={bemClass}>
      {icon && <Icon name={icon} />}
      {text}
    </div>
  );
};

Message.propTypes = {
  icon: PropTypes.oneOf(iconArray),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error', 'success']),
};

Message.defaultProps = {
  icon: undefined,
  type: 'info',
};

export default Message;
