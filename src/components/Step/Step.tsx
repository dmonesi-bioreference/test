import { Typography } from 'components/Typography';

import StepStyled from './Step.styles';

export type StepPosition = 'past' | 'current' | 'next' | 'future';

export interface StepProps {
  number: number;
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
