import clsx from 'clsx';
import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { InputBaseProps } from '../FormControl/props';
import RadioStyled from './Radio.styles';
import { RadioContext } from './RadioGroup';

interface RadioInterface extends InputBaseProps {
  checked?: boolean;
}

export type RadioProps = Omit<
  RadioInterface,
  'labelPosition' | 'placeholder' | 'name' | 'onChange'
>;

let id = 0;

const Radio: FC<RadioProps> = (props) => {
  const inputId = `radio-${++id}`;
  const labelId = `radio-label-${id}`;
  const helpTextId = `select-help-text-${id}`;
  const context = useContext(RadioContext);
  const [isFocused, setIsFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(props.checked || false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsChecked(context.value === props.value);
  }, [context.value]);

  const handleFocus = () => {
    setIsFocused(true);
    props.onFocus;
  };

  const handleBlur = () => {
    setIsFocused(false);
    props.onBlur;
  };

  return (
    <RadioStyled
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
          radio: true,

          // Sizes
          'radio--small': props.size === 'small',
          'radio--medium': props.size === 'medium',
          'radio--large': props.size === 'large',

          // Modifiers
          'radio--checked': isChecked,
          'radio--disabled': props.disabled,
          'radio--focused': isFocused,
          'radio--invalid': props.invalid,
        })}
      >
        <span className="radio__control">
          {isChecked && (
            <span className="radio__icon">
              <svg viewBox="0 0 16 16">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g fill="currentColor">
                    <circle cx="8" cy="8" r="3.42857143"></circle>
                  </g>
                </g>
              </svg>
            </span>
          )}
          <input
            ref={input}
            id={inputId}
            type="radio"
            name={context.name}
            value={props.value}
            checked={isChecked}
            disabled={props.disabled}
            required={props.required}
            aria-checked={isChecked ? 'true' : 'false'}
            aria-labelledby={labelId}
            onClick={props.onClick}
            onChange={context.onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </span>
      </div>
    </RadioStyled>
  );
};

export default Radio;
