import clsx from 'clsx';
import Link from 'next/link';

import ButtonStyled from './Button.styles';

export type ButtonKind =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'text'
  | 'image';

export type LinkKind =
  | 'link-small'
  | 'link-extra-small'
  | 'link-medium'
  | 'link-large';

export interface ButtonProps {
  /** Set to true to render the button in a disabled state. */
  disabled?: boolean;
  /** Tells the browser to download the linked file as this file name. Valid only when `href` is set. */
  download?: string;
  /** Passing `href` will override the `as` prop, rendering this button as an `a` element. */
  href?: string;
  /** The button's visual style. */
  kind?: ButtonKind | LinkKind;
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
  /** Group button text with prefix or suffix icons or neither */
  group?: 'prefix' | 'suffix' | undefined;
  /** Tells the browser where to open the link. Used only if `href` is set. */
  target?: '_blank' | '_parent' | '_self' | '_top';
  /** Specify relationship between current doc and linked doc */
  rel?: string;
  color?: 'light' | 'default' | 'danger';
  /** Used to pass className down to component */
  className?: string;
  /** Button will hug contents */
  hugContent?: boolean;
}

const defaultProps: ButtonProps = {
  kind: 'default',
  className: '',
};

const Button: React.FC<ButtonProps> = (props) => {
  const color = props.color || 'default';
  const className = clsx({
    button: true,

    // Kinds
    'button--default': props.kind === 'default',
    'button--primary': props.kind === 'primary',
    'button--success': props.kind === 'success',
    'button--info': props.kind === 'info',
    'button--warning': props.kind === 'warning',
    'button--danger': props.kind === 'danger',
    'button--text': props.kind === 'text',
    'button--image': props.kind === 'image',
    'link--extra-small': props.kind == 'link-extra-small',
    'link--small': props.kind == 'link-small',
    'link--medium': props.kind == 'link-medium',
    'link--large': props.kind == 'link-large',
    'button--link':
      props.kind === 'link-extra-small' ||
      props.kind === 'link-small' ||
      props.kind === 'link-medium' ||
      props.kind === 'link-large',

    // Modifiers
    'button--disabled': props.disabled,
    'button--space-between': props.spreadContent,
    'button--hug-content': props.hugContent,
  });

  const ButtonChildren: React.FC = () => {
    if (props.group === 'prefix') {
      return (
        <>
          <div className="button__grouping">
            {renderIfExists(props.prefix, 'button__prefix')}
            <span className="button__label">{props.children}</span>
          </div>
          {renderIfExists(props.suffix, 'button__suffix')}
        </>
      );
    }
    if (props.group === 'suffix') {
      return (
        <>
          {renderIfExists(props.prefix, 'button__prefix')}
          <div className="button__grouping">
            <span className="button__label">{props.children}</span>
            {renderIfExists(props.suffix, 'button__suffix')}
          </div>
        </>
      );
    }
    return (
      <>
        {renderIfExists(props.prefix, 'button__prefix')}
        <span className="button__label">{props.children}</span>
        {renderIfExists(props.suffix, 'button__suffix')}
      </>
    );
  };

  if (props.href) {
    return (
      <Link href={props.href} passHref>
        <ButtonStyled
          as="a"
          className={`${color} ${className} ${props.className}`}
          target={props.target}
          download={props.download}
          onClick={props.onClick}
          href={props.href}
          /** Inclusion of this line prevents tabnabbing phishing */
          rel={props.target === '_blank' ? 'noopener noreferrer' : props.rel}
        >
          <ButtonChildren />
        </ButtonStyled>
      </Link>
    );
  } else if (props.onClick) {
    return (
      <ButtonStyled
        as="button"
        className={`${color} ${className} ${props.className}`}
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        type={props.submit ? 'submit' : 'button'}
        onClick={props.onClick}
      >
        <ButtonChildren />
      </ButtonStyled>
    );
  } else {
    return (
      <ButtonStyled
        as="div"
        className={`${color} ${className} ${props.className}`}
      >
        <ButtonChildren />
      </ButtonStyled>
    );
  }
};

const renderIfExists = (component: React.ReactNode, className: string) => {
  return component && <span className={className}>{component}</span>;
};

Button.defaultProps = defaultProps;

export default Button;
