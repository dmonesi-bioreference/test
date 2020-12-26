import { LabelPosition } from './FormControl';

export interface InputBaseProps {
  disabled?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  label: string;
  labelPosition?: LabelPosition;
  helpText?: string;
  name: string;
  onBlur?: (e) => void;
  onChange?: (e) => void;
  onInvalid?: (e) => void;
  onFocus?: (e) => void;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size: 'small' | 'medium' | 'large';
}

export interface InputTextBaseProps extends InputBaseProps {
  autocapitalize?: string;
  autocorrect?: string;
  autocomplete?: string;
  inputmode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
  spellcheck?: boolean;
  minLength?: number;
  maxLength?: number;
  onInput?: (e) => void;
  value?: string;
}
