import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { InputBaseProps } from 'components/FormControl';
import { Icon } from 'components/Icon';

import CheckboxStyled from './Checkbox.styles';

interface CheckboxInterface extends InputBaseProps {
  /** Set to `true` to render the checkbox in a checked state. */
  checked?: boolean;
}

export type CheckboxProps = Omit<
  CheckboxInterface,
  'labelPosition' | 'placeholder'
>;

let idCount = 0;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [id] = useState(++idCount);
  const inputId = `checkbox-${id}`;
  const labelId = `checkbox-label-${id}`;
  const helpTextId = `select-help-text-${id}`;
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

  const handleClick = (e: React.MouseEvent) => {
    const input = e.currentTarget as HTMLInputElement;
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
          'checkbox--invalid': props.invalid,
        })}
      >
        <span className="checkbox__control">
          {isChecked && (
            <span className="checkbox__icon">
              <Icon name="check" color="white" />
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
          />
        </span>
      </div>
    </CheckboxStyled>
  );
};

export default Checkbox;
