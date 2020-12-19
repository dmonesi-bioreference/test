import React, { FC } from 'react';
import Message from '../Message';

interface FieldsetProps {
  childrenOrientation?: 'vertical' | 'horizontal';
  disabled?: boolean;
  hideLegend?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  label: string;
  labelSize?: 'small' | 'large';
  labelStyle?: 'normal' | 'emphasized' | 'header';
  orientation?: 'vertical' | 'horizontal';
  required?: boolean;
}

const Fieldset: FC<FieldsetProps> = ({
  children,
  childrenOrientation = 'vertical',
  disabled,
  hideLegend,
  invalid,
  invalidMessage,
  label,
  labelSize = 'small',
  labelStyle = 'emphasized',
  orientation = 'vertical',
  required,
}) => {
  const invalidClass = invalid ? '--has-errors' : '';
  const hideLegendClass = hideLegend ? 'o-input--hidden-legend' : '';
  const bemClass = `o-input${invalidClass}`;

  return (
    <fieldset className={bemClass} disabled={disabled} data-orientation={orientation}>
      <legend className={hideLegendClass} data-size={labelSize} data-style={labelStyle}>
        <span>
          {label}
          {required && <span>*</span>}
        </span>
      </legend>
      <div data-children-orientation={childrenOrientation}>{children}</div>
      {invalid && invalidMessage && (
        <Message icon="exclamation-solid" type="error">
          {invalidMessage}
        </Message>
      )}
    </fieldset>
  );
};

export default Fieldset;
