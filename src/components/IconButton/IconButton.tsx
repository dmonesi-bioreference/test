import clsx from 'clsx';

import { HeroiconProps, Icon } from 'components/Icon';

import IconButtonStyled from './IconButton.styles';

export interface IconButtonProps extends HeroiconProps {
  /** A description of the button for screen readers. */
  label: string;
  /** Set to true to render the button in a disabled state. */
  disabled?: boolean;
  /** Specify the onClick event for the button. */
  onClick?: () => void;
  /** Should this look for a custom icon instead? */
  customIcon?: boolean;
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
  return (
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
        <Icon kind="custom" name={props.name} />
      ) : (
        <Icon name={props.name} style={props.style} aria-hidden="true" />
      )}

      {props.children}
    </IconButtonStyled>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
