import { LabelPosition } from './FormControl';

export interface InputBaseProps {
  /** Set to `true` to render the input in a disabled state. */
  disabled?: boolean;
  /** Set to `true` to render the input in an invalid state. */
  invalid?: boolean;
  /** The associated message to the display if `invalid` is `true`.. */
  invalidMessage?: string;
  /** The input's label. Required for accessibility even if `labelPosition` is `hidden`. */
  label: string;
  /** The position of the label relative to the input. */
  labelPosition?: LabelPosition;
  /** Optional help text to display alongside the input. */
  helpText?: string;
  /** The name of the input. */
  name: string;
  /** Function to run when the input's onBlur is triggered. */
  onBlur?: (e) => void;
  /** Function to run when the input's onChange is triggered. */
  onChange?: (e) => void;
  /** Function to run when the input's onClick is triggered. */
  onClick?: (e) => void;
  /** Function to run when the input's onInvalid is triggered. */
  onInvalid?: (e) => void;
  /** Function to run when the input's onFocus is triggered. */
  onFocus?: (e) => void;
  /** Optional placeholder to display when the input is empty. */
  placeholder?: string;
  /** Set to `true` to make the input required.. */
  required?: boolean;
  /** The size of the input. */
  size?: 'small' | 'medium' | 'large';
  /** The initial value of the input. */
  value?: string;
}

export interface InputTextBaseProps extends InputBaseProps {
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  /** Indicates whether or not autocorrect is on or off. (Safari only) */
  autocorrect?: 'on' | 'off';
  /** Indicates the what if any permission the browser has to provide automated assistance when completing fields. */
  autocomplete?: string;
  /** The inputmode of the input. Used to display the appropriate virtual keyboard on a touch-based OS. */
  inputmode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
  /** Indicates if the input may be checked for spelling errors. */
  spellcheck?: boolean;
  /** The minimum length of the value. */
  minLength?: number;
  /** The maximum length of the value. */
  maxLength?: number;
  /** Function to run when the input's onInput is triggered. */
  onInput?: (e) => void;
  /** Set to `true` to render the input in a read-only state.  */
  readonly?: boolean;
}
