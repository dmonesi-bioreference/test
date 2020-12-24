import clsx from 'clsx';
import React, { FC, useEffect, useState, useRef } from 'react';
import Icon from '../Icon';
import DialogStyled from './Dialog.styles';

let id = 0;

export interface DialogProps {
  /** Close the dialog when the user clicks the overlay. */
  dismissOnOverlay?: boolean;
  /** The contents of the footer. */
  footer?: React.ReactNode;
  /** Set to true to hide the title and close button. */
  hideHeader?: boolean;
  /** Function to run when the dialog closes. */
  onClose?: () => void;
  /** Indicates whether or not the dialog is open. */
  open: boolean;
  /** The title of the header. Required for accessibility even if the header is hidden. */
  title: string;
}

const defaultProps: Partial<DialogProps> = {
  dismissOnOverlay: true,
  hideHeader: false,
  open: false,
};

const Dialog: FC<DialogProps> = (props) => {
  const componentId = `dialog-${++id}`;

  const panel = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(props.open ? true : false);

  useEffect(() => {
    props.open ? show() : hide();
  }, [props.open]);

  const show = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  const hide = () => {
    setIsOpen(false);
    props.onClose && props.onClose();
  };

  const handleCloseClick = () => {
    hide();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      hide();
    }
  };

  const handleTransitionEnd = (event: React.TransitionEvent) => {
    const target = event.target as HTMLElement;

    if (
      event.propertyName === 'opacity' &&
      target.classList.contains('dialog__panel')
    ) {
      setIsVisible(isOpen);
    }

    if (isOpen) {
      panel.current?.focus();
    }
  };

  return (
    <div
      role="presentation"
      onTransitionEnd={handleTransitionEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <DialogStyled
        className={clsx({
          dialog: true,
          'dialog--open': isOpen,
          'dialog--visible': isVisible,
          'dialog--has-footer': props.footer,
        })}
      >
        <div
          role="presentation"
          className="dialog__overlay"
          onClick={props.dismissOnOverlay ? handleCloseClick : undefined}
        ></div>
        <div
          className="dialog__panel"
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-hidden={props.open ? 'false' : 'true'}
          aria-label={props.title}
          aria-labelledby={
            !props.hideHeader ? `${componentId}-title` : undefined
          }
        >
          {!props.hideHeader && (
            <header className="dialog__header">
              <span className="dialog__title" id={`${componentId}-title`}>
                {props.title}
              </span>

              <button
                className="dialog__close"
                type="button"
                name="close"
                onClick={handleCloseClick}
                aria-label="Close"
              >
                <Icon name="x" />
              </button>
            </header>
          )}
          <div className="dialog__body">{props.children}</div>
          {props.footer && (
            <footer className="dialog__footer">{props.footer}</footer>
          )}
        </div>
      </DialogStyled>
    </div>
  );
};

Dialog.defaultProps = defaultProps;

export default Dialog;
