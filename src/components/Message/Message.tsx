import React, { FC } from 'react';
import Icon from '../Icon';
import { IconName } from '../Icon/Icon';
import MessageStyled from './Message.styles';

interface MessageProps {
  icon?: IconName;
  type?: 'info' | 'error' | 'success' | 'warning';
}

const Message: FC<MessageProps> = ({ children, icon, type = 'info' }) => (
  <MessageStyled data-type={type}>
    <span>
      {icon && <Icon name={icon} />}
      {children}
    </span>
  </MessageStyled>
);

export default Message;
