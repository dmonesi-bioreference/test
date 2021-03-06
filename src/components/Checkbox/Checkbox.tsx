import { CheckIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { InputBaseProps } from 'components/FormControl';

import CheckboxStyled from './Checkbox.styles';

interface CheckboxInterface extends InputBaseProps {
  /** Set to `true` to render the checkbox in a checked state. */
  checked?: boolean;
  /** Appends a link to the label. */
  linkMessage?: string;
  /** Appends a link to the label. */
  onLinkClick?: () => void;
}

export type CheckboxProps = Omit<
  CheckboxInterface,
  'labelPosition' | 'placeholder'
>;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const inputId = `checkbox-${props.name}`;
  const labelId = `checkbox-label-${props.name}`;
  const helpTextId = `select-help-text-${props.name}`;
  const [isFocused, setIsFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(props.checked);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsChecked(props.checked);
  }, [props.checked]);

  const handleFocus = () => {
    setIsFocused(true);
    props.onFocus;
  };

  const handleBlur = () => {
    setIsFocused(false);
    props.onBlur;
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    setIsChecked(input.checked);
    props.onClick;
  };

  return (
    <CheckboxStyled
      inputId={inputId}
      booleanInput={true}
      disabled={props.disabled}
      label={props.label}
      labelId={labelId}
      helpTextId={helpTextId}
      helpText={props.helpText || undefined}
      invalid={props.invalid}
      invalidMessage={props.invalidMessage}
      size={props.size || 'medium'}
      linkMessage={props.linkMessage}
      onLinkClick={props.onLinkClick}
    >
      <div
        className={clsx({
          checkbox: true,

          // Sizes
          'checkbox--small': props.size === 'small',
          'checkbox--medium': props.size === 'medium',
          'checkbox--large': props.size === 'large',

          // Modifiers
          'checkbox--checked': isChecked,
          'checkbox--disabled': props.disabled,
          'checkbox--focused': isFocused,
        })}
      >
        <span
          className={clsx({
            checkbox__control: true,

            // Modifiers
            'checkbox--invalid': props.invalid,
          })}
        >
          {isChecked && (
            <span className="checkbox__icon">
              <CheckIcon />
            </span>
          )}
          <input
            ref={input}
            id={inputId}
            type="checkbox"
            name={props.name}
            value={props.value}
            checked={isChecked}
            disabled={props.disabled}
            required={props.required}
            aria-checked={isChecked ? 'true' : 'false'}
            aria-labelledby={labelId}
            aria-describedby={helpTextId}
            onClick={handleClick}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={props.onChange}
          />
        </span>
      </div>
    </CheckboxStyled>
  );
};

export default Checkbox;
