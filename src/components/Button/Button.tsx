import clsx from 'clsx';
import { Link } from 'react-router-dom';

import ButtonStyled from './Button.styles';

export type ButtonKind =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'text';

export interface ButtonProps {
  /** Set to true to render the button in a disabled state. */
  disabled?: boolean;
  /** Tells the browser to download the linked file as this file name. Valid only when `href` is set. */
  download?: string;
  /** Passing `href` will override the `as` prop, rendering this button as an `a` element. */
  href?: string;
  /** The button's visual style. */
  kind?: ButtonKind;
  /** An optional name for the button. Ignore if `href` is set. */
  name?: string;
  /** An optional value for the button. Ignore if `href` is set. */
  value?: string;
  /** Set a linkTo value with React Router. */
  linkTo?: string | Record<string, unknown>;
  /** Specify the onClick event for the button. */
  onClick?: () => void;
  /** Used to prepend an icon or similar element to the button. */
  prefix?: React.ReactNode;
  /** Set to true if activating the button should submit the form. Ignored if `href` is set. */
  submit?: boolean;
  /** Used to append an icon or similar element to the button. */
  suffix?: React.ReactNode;
  /** Used to set spacing between button children. */
  spreadContent?: boolean;
  /** Tells the browser where to open the link. Used only if `href` is set. */
  target?: '_blank' | '_parent' | '_self' | '_top';
}

const defaultProps: ButtonProps = {
  kind: 'default',
};

const Button: React.FC<ButtonProps> = (props) => {
  const isLink = props.href ? true : false;
  const isRouterLink = props.linkTo ? true : false;
  const isButton = !isLink && !isRouterLink;

  const classNames = clsx({
    button: true,

    // Kinds
    'button--default': props.kind === 'default',
    'button--primary': props.kind === 'primary',
    'button--secondary': props.kind === 'secondary',
    'button--tertiary': props.kind === 'tertiary',
    'button--success': props.kind === 'success',
    'button--info': props.kind === 'info',
    'button--warning': props.kind === 'warning',
    'button--danger': props.kind === 'danger',
    'button--text': props.kind === 'text',
    'button--link': props.kind === 'secondary' || props.kind === 'tertiary',

    // Modifiers
    'button--disabled': props.disabled,
    'button--space-between': props.spreadContent,
  });

  const buttonMarkup = (as: 'a' | 'button' | 'div') => (
    <ButtonStyled
      as={as}
      className={classNames}
      disabled={isButton ? props.disabled : undefined}
      target={isLink && props.target ? props.target : undefined}
      download={isLink && props.download ? props.download : undefined}
      onClick={props.onClick}
      href={isLink ? props.href : undefined}
      name={isButton ? props.name : undefined}
      value={isButton ? props.value : undefined}
      type={isButton ? (props.submit ? 'submit' : 'button') : undefined}
    >
      {renderIfExists(props.prefix, 'button__prefix')}
      <span className="button__label">{props.children}</span>
      {renderIfExists(props.suffix, 'button__suffix')}
    </ButtonStyled>
  );

  if (props.linkTo) {
    return (
      <Link
        to={props.linkTo}
        target={isLink && props.target ? props.target : undefined}
      >
        {buttonMarkup('div')}
      </Link>
    );
  }

  return buttonMarkup(isLink ? 'a' : 'button');
};

const renderIfExists = (component: React.ReactNode, className: string) => {
  return component ? <span className={className}>{component}</span> : null;
};

Button.defaultProps = defaultProps;

export default Button;
