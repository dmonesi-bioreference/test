export interface InputBaseProps {
  disabled?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  label: string | React.ReactNode;
  name: string;
  onBlur?: (e) => void;
  onChange?: (e) => void;
  readonly?: boolean;
  required?: boolean;
}

export interface InputTextBaseProps extends InputBaseProps {
  hideLabel?: boolean;
  labelStyle?: 'normal' | 'emphasized';
  maxLength?: number;
  onFocus?: (e) => void;
  onKeyUp?: (e) => void;
  orientation?: 'vertical' | 'horizontal';
  placeholder?: string;
  value?: string;
}
