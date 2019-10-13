export interface InputBaseProps {
  disabled?: boolean
  invalid?: boolean
  invalidMessage?: string
  label: string | React.ReactNode
  name: string
  onChange?: (e) => void
  readonly?: boolean
  required?: boolean
}

export interface InputTextBaseProps extends InputBaseProps {
  hideLabel?: boolean
  labelStyle?: 'normal' | 'emphasized'
  maxLength?: number
  onBlur?: (e) => void
  onFocus?: (e) => void
  onKeyUp?: (e) => void
  orientation?: 'vertical' | 'horizontal'
  placeholder?: string
  value?: string
}
