import clsx from 'clsx';
import { FC } from 'react';
import DataStyled from './Data.styles';

export interface DataProps {
  /** The label. */
  label: string;
  /** The orientation of the component. */
  orientation?: 'vertical' | 'horizontal';
  /** Set to true to switch the order of the label and value. */
  isReversed?: boolean;
}

const defaultProps: Partial<DataProps> = {
  orientation: 'vertical',
};

const Data: FC<DataProps> = (props) => (
  <DataStyled
    className={clsx({
      'label-value': true,
      'label-value--reversed': props.isReversed,
      'label-value--vertical': props.orientation === 'vertical',
      'label-value--horizontal': props.orientation === 'horizontal',
    })}
  >
    <div className="label-value__label">{props.label}</div>
    <div className="label-value__value">{props.children}</div>
  </DataStyled>
);

Data.defaultProps = defaultProps;

export default Data;
