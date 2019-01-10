import React from 'react';
import PropTypes from 'prop-types';
import MessageStyled from './Message.styles';
import Icon, { iconArray } from '../Icon';

const Message = ({ icon, text, type }) => {
  return (
    <MessageStyled data-type={type}>
      {icon && <Icon name={icon} />}
      {text}
    </MessageStyled>
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
