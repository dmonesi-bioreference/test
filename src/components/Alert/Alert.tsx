import clsx from 'clsx';
import { useState, useEffect, useCallback, useRef } from 'react';

import { Icon } from 'components/Icon';
import { IconButton } from 'components/IconButton';

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

/**
 *  **➡️ Alerts will not be visible if the `open` prop is not present.**
 */
const Alert: React.FC<AlertProps> = (props) => {
  const autoHideTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(props.open ? true : false);
  const close = useCallback(() => {
    props.onClose && props.onClose();
    // eslint-disable-next-line
  }, []);

  const hide = useCallback(() => {
    if (!isVisible) {
      return;
    }

    setIsOpen(false);
    close();
  }, [close, isVisible]);

  const show = useCallback(() => {
    const timeout = autoHideTimeout.current;

    if (isVisible) {
      return;
    }

    setIsVisible(true);
    setIsOpen(true);

    if (props.duration && props.duration < Infinity) {
      autoHideTimeout.current = setTimeout(hide, props.duration);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [hide, isVisible, props.duration]);

  const restartAutoHide = useCallback(() => {
    const timeout = autoHideTimeout.current;
    if (timeout) {
      clearTimeout(timeout);
    }

    if (isOpen && props.duration && props.duration < Infinity) {
      autoHideTimeout.current = setTimeout(hide, props.duration);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [props.duration, isOpen, hide]);

  useEffect(() => {
    props.open ? show() : hide();
  }, [props.open, show, hide]);

  useEffect(() => {
    restartAutoHide();
  }, [restartAutoHide]);

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
