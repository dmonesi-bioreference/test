import { Typography } from 'components/Typography';

import StepStyled from './Step.styles';

export type StepPosition = 'past' | 'current' | 'next' | 'future';

/** Used as a step within the ProgressBar. */
export interface StepProps {
  /** A visual representation of the Step number. */
  number: number;
  /** Determines the styling depending on whether it's a 'past', 'current', 'next' or 'future' step. */
  position: StepPosition;
}

const Step: React.FC<StepProps> = (props) => {
  return (
    <StepStyled className={`step--${props.position}`}>
      <Typography type="heading" level="4">
        {props.number}.
      </Typography>
      <div className="step__bar" />
    </StepStyled>
  );
};

export default Step;
