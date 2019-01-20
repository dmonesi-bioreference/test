import React from 'react';
import PropTypes from 'prop-types';
import MessageStyled from './Message.styles';
import Icon, { iconArray } from '../Icon';

const Message = ({ children, icon, type }) => {
  return (
    <MessageStyled data-type={type}>
      {icon && <Icon name={icon} />}
      {children}
    </MessageStyled>
  );
};

Message.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(iconArray),
  type: PropTypes.oneOf(['info', 'error', 'success']),
};

Message.defaultProps = {
  icon: undefined,
  type: 'info',
};

export default Message;
