import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { InputBaseProps } from 'components/FormControl';

import SelectStyled from './Select.styles';

export interface SelectProps extends InputBaseProps {
  inputHelper?: React.ReactNode;
}

let idCount = 0;

const Select: React.FC<SelectProps> = (props) => {
  const [id] = useState(++idCount);
  const inputId = `select-${id}`;
  const labelId = `select-label-${id}`;
  const helpTextId = `select-help-text-${id}`;
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.placeholder ? '' : undefined);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleFocus = () => {
    setIsFocused(true);
    props.onFocus;
  };

  const handleBlur = () => {
    setIsFocused(false);
    props.onBlur;
  };

  return (
    <SelectStyled
      inputId={inputId}
      label={props.label}
      labelPosition={props.labelPosition}
      labelId={labelId}
      helpTextId={helpTextId}
      helpText={props.helpText || undefined}
      invalid={props.invalid}
      invalidMessage={props.invalidMessage}
      size={props.size || 'medium'}
    >
      <div
        className={clsx({
          select: true,

          // Sizes
          'select--small': props.size === 'small',
          'select--medium': props.size === 'medium',
          'select--large': props.size === 'large',

          // Modifiers
          'select--disabled': props.disabled,
          'select--focused': isFocused,
          'select--invalid': props.invalid,
          'select--placeholder': value === '',
        })}
      >
        <select
          id={inputId}
          className="select__control"
          name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
          required={props.required}
          aria-labelledby={labelId}
          aria-describedby={helpTextId}
          aria-invalid={props.invalid ? 'true' : 'false'}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onChange={props.onChange}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onInvalid={props.onInvalid}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {props.placeholder && <option value="">{props.placeholder}</option>}
          {props.children}
        </select>
      </div>
      {props.inputHelper}
    </SelectStyled>
  );
};

export default Select;
