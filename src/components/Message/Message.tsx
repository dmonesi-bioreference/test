import React, { FC } from 'react';
import Icon from '../Icon/Icon';
import MessageStyled from './Message.styles';
import clsx from 'clsx';

export interface MessageProps {
  /** Determines the message's color and icon, if enabled.  */
  type?: 'info' | 'danger' | 'success' | 'warning';
  /** Set to true to hide the message icon. */
  hideIcon?: boolean;
}

const defaultProps: MessageProps = {
  type: 'info',
};

const Message: FC<MessageProps> = (props) => {
  const renderIcon = () => {
    switch (props.type) {
      case 'info':
        return <Icon name="information-circle" />;
      case 'success':
        return <Icon name="check-circle" />;
      case 'warning':
        return <Icon name="exclamation" />;
      case 'danger':
        return <Icon name="arrow-circle-right" />;
    }
  };

  return (
    <MessageStyled
      className={clsx({
        message: true,
        'message--info': props.type === 'info',
        'message--success': props.type === 'success',
        'message--warning': props.type === 'warning',
        'message--danger': props.type === 'danger',
      })}
    >
      {!props.hideIcon && <span className="message__icon">{renderIcon()}</span>}
      {props.children}
    </MessageStyled>
  );
};

Message.defaultProps = defaultProps;

export default Message;
