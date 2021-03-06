import clsx from 'clsx';
import Link from 'next/link';

import { HeroiconProps, Icon } from 'components/Icon';

import IconButtonStyled from './IconButton.styles';

export interface IconButtonProps extends HeroiconProps {
  /** A description of the button for screen readers. */
  label: string;
  /** Set to true to render the button in a disabled state. */
  disabled?: boolean;
  /** Specify the onClick event for the button. */
  onClick?: () => void;
  /** Passing `href` will wrap this button in an `a` element. */
  href?: string;
  /** Should this look for a custom icon instead? */
  customIcon?: boolean;
  /** Set to true if icon is encircled */
  encircled?: boolean;
}

const defaultProps: Partial<IconButtonProps> = {
  disabled: false,
};

/**
 * ## Usage
 *
 * Icon Buttons use `currentColor` to determine their fill or stroke colors.
 * To set a color, set the `color` style property on the button itself or on a
 * parent element.
 *
 * Icon Buttons are sized relative to their current font size. To change their size,
 * set the `font-size` style property on the button itself or on a parent element.
 *
 * ## Available Icons
 * Search the available icons at https://heroicons.com.
 */
const IconButton: React.FC<IconButtonProps> = (props) => {
  return props.href ? (
    <Link href={props.href} passHref>
      <IconButtonStyled
        className={clsx({
          'icon-button': true,
          'icon-button--disabled': props.disabled,
        })}
        type="button"
        aria-label={props.label}
        onClick={props.onClick}
      >
        {props.customIcon ? (
          <Icon name={props.name} kind="custom" />
        ) : (
          <Icon
            name={props.name}
            encircled={props.encircled}
            style={props.style}
          />
        )}
        {props.children}
      </IconButtonStyled>
    </Link>
  ) : (
    <IconButtonStyled
      className={clsx({
        'icon-button': true,
        'icon-button--disabled': props.disabled,
      })}
      type="button"
      aria-label={props.label}
      onClick={props.onClick}
    >
      {props.customIcon ? (
        <Icon name={props.name} kind="custom" />
      ) : (
        <Icon
          name={props.name}
          encircled={props.encircled}
          style={props.style}
        />
      )}
      {props.children}
    </IconButtonStyled>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
