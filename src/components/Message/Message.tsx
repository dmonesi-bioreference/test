import React, { FC } from 'react';
import Icon from '../Icon';
import { HeroiconName } from '../Icon/heroicon';
import MessageStyled from './Message.styles';

interface MessageProps {
  icon?: HeroiconName;
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
