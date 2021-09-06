import clsx from 'clsx';
import Link from 'next/link';

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
  | 'text'
  | 'image';

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
  const className = clsx({
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
    'button--image': props.kind === 'image',
    'button--link': props.kind === 'secondary' || props.kind === 'tertiary',

    // Modifiers
    'button--disabled': props.disabled,
    'button--space-between': props.spreadContent,
  });

  return props.href ? (
    <Link href={props.href} passHref>
      <ButtonStyled
        as="a"
        className={className}
        target={props.target}
        download={props.download}
        onClick={props.onClick}
        href={props.href}
      >
        <span className="button__prefix">{props.prefix}</span>
        <span className="button__label">{props.children}</span>
        <span className="button__suffix">{props.suffix}</span>
      </ButtonStyled>
    </Link>
  ) : (
    <ButtonStyled
      className={className}
      disabled={props.disabled}
      name={props.name}
      value={props.value}
      type={props.submit ? 'submit' : 'button'}
      onClick={props.onClick}
    >
      {renderIfExists(props.prefix, 'button__prefix')}
      <span className="button__label">{props.children}</span>
      {renderIfExists(props.suffix, 'button__suffix')}
    </ButtonStyled>
  );
};

const renderIfExists = (component: React.ReactNode, className: string) => {
  return component ? <span className={className}>{component}</span> : null;
};

Button.defaultProps = defaultProps;

export default Button;
