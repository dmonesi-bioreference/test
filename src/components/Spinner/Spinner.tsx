import { FC } from 'react';
import tokens, { colors } from '../../styles/tokens';
import SpinnerStyled from './Spinner.styles';

export interface SpinnerProps {
  /** The width of the indicator. */
  strokeWidth?: number;
  /** The color of the spinner's track. */
  trackColor?: string;
  /** The color of the spinner's indicator. */
  indicatorColor?: string;
}

const defaultProps: SpinnerProps = {
  strokeWidth: 2,
  trackColor: colors.grey[300],
  indicatorColor: tokens.colorPrimary,
};

const Spinner: FC<SpinnerProps> = (props) => {
  return <SpinnerStyled aria-busy="true" aria-live="polite" {...props} />;
};

Spinner.defaultProps = defaultProps;

export default Spinner;
