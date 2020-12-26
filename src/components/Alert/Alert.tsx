import clsx from 'clsx';
import React, { FC, useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import IconButton from '../IconButton/IconButton';
import AlertStyled from './Alert.styles';

export interface AlertProps {
  /** Set to true to allow the user to close the flash. */
  closable?: boolean;
  /** The length of time, in milliseconds, the alert will show before closing
   * itself. If the user interacts with the alert, the timer will reset.
   */
  duration?: number;
  /** Function to run when the alert closes. */
  onClose?: () => void;
  /** Indicates whether or not the alert is open. */
  open?: boolean;
  /** Determines the alert's color and icon. */
  type?: 'info' | 'danger' | 'success' | 'warning';
}

const defaultProps: AlertProps = {
  type: 'info',
  duration: Infinity,
};

const Alert: FC<AlertProps> = (props) => {
  let autoHideTimeout: NodeJS.Timeout;
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(props.open ? true : false);

  useEffect(() => {
    props.open ? show() : hide();
  }, [props.open]);

  useEffect(() => {
    restartAutoHide();
  }, [props.duration]);

  const show = () => {
    if (isVisible) {
      return;
    }

    setIsVisible(true);
    setIsOpen(true);

    if (props.duration && props.duration < Infinity) {
      autoHideTimeout = setTimeout(() => hide(), props.duration);
    }
  };

  const hide = () => {
    if (!isVisible) {
      return;
    }

    setIsOpen(false);
    props.onClose && props.onClose();
  };

  const handleCloseClick = () => {
    hide();
  };

  const handleMouseMove = () => {
    restartAutoHide();
  };

  const handleTransitionEnd = (event: React.TransitionEvent) => {
    const target = event.target as HTMLElement;

    if (
      event.propertyName === 'opacity' &&
      target.classList.contains('alert')
    ) {
      setIsVisible(isOpen);
    }
  };

  const restartAutoHide = () => {
    clearTimeout(autoHideTimeout);
    if (isOpen && props.duration && props.duration < Infinity) {
      autoHideTimeout = setTimeout(() => hide(), props.duration);
    }
  };

  const renderIcon = () => {
    switch (props.type) {
      case 'info':
        return <Icon style="outline" name="information-circle" />;
      case 'success':
        return <Icon style="outline" name="badge-check" />;
      case 'warning':
        return <Icon style="outline" name="exclamation" />;
      case 'danger':
        return <Icon style="outline" name="shield-exclamation" />;
    }
  };
  return (
    <AlertStyled
      className={clsx({
        alert: true,
        'alert--open': isOpen,
        'alert--visible': isVisible,
        'alert--closable': props.closable,
        'alert--info': props.type === 'info',
        'alert--success': props.type === 'success',
        'alert--warning': props.type === 'warning',
        'alert--danger': props.type === 'danger',
      })}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      aria-hidden={isOpen ? 'false' : 'true'}
      onMouseMove={handleMouseMove}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="alert__icon">{renderIcon()}</div>

      <div className="alert__message">{props.children}</div>

      {props.closable && (
        <div className="alert__close">
          <IconButton name="x" label="Close" onClick={handleCloseClick} />
        </div>
      )}
    </AlertStyled>
  );
};

Alert.defaultProps = defaultProps;

export default Alert;
