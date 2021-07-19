import clsx from 'clsx';
import { FC, useState } from 'react';
import Message from '../Message';
import FieldsetStyled from './Fieldset.styles';

export interface FieldsetProps {
  /** Optional class to add to the fieldset. */
  className?: string;
  /** Set to true to hide the legend. */
  hideLegend?: boolean;
  /** The orientation of the inputs themselves. */
  inputOrientation?: 'vertical' | 'horizontal';
  /** Set to true to render the fieldset in an invalid state. */
  invalid?: boolean;
  /** Message to show if the fieldset is invalid. */
  invalidMessage?: string;
  /** The legend to accompany the fieldset. Required for accessibility even if hideLegend is true. */
  legend: string;
  /** Optional help text to display with the fieldset. */
  helpText?: string;
  /** The orientation of the inputs in relation to the legend. */
  orientation?: 'vertical' | 'horizontal' | 'horizontal-apart';
}

const defaultProps: Partial<FieldsetProps> = {
  inputOrientation: 'vertical',
  orientation: 'vertical',
};

let idCount = 0;

const Fieldset: FC<FieldsetProps> = (props) => {
  const [id] = useState(++idCount);
  const helpTextId = `fieldset-help-text-${id}`;

  return (
    <FieldsetStyled
      aria-describedby={helpTextId}
      className={clsx(
        {
          fieldset: true,

          // Modifiers
          'fieldset--hide-legend': props.hideLegend,
          'fieldset--vertical': props.orientation === 'vertical',
          'fieldset--horizontal': props.orientation === 'horizontal',
          'fieldset--horizontal fieldset--apart':
            props.orientation === 'horizontal-apart',
        },
        props.className
      )}
    >
      <div className="fieldset__positioner">
        <span className="fieldset__labels">
          <legend className="fieldset__legend">{props.legend}</legend>

          {props.helpText && (
            <div
              id={helpTextId}
              className="fieldset__help-text"
              aria-hidden={props.helpText ? false : true}
            >
              {props.helpText}
            </div>
          )}

          {props.invalid && props.invalidMessage && (
            <div className="fieldset__invalid-message">
              <Message type="danger">{props.invalidMessage}</Message>
            </div>
          )}
        </span>

        <div
          className={clsx({
            fieldset__inputs: true,

            // Modifiers
            'fieldset__inputs--vertical': props.inputOrientation === 'vertical',
            'fieldset__inputs--horizontal':
              props.inputOrientation === 'horizontal',
          })}
        >
          {props.children}
        </div>
      </div>
    </FieldsetStyled>
  );
};

Fieldset.defaultProps = defaultProps;

export default Fieldset;
