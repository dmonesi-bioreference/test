import { Divider } from 'components/Divider';
import { Typography } from 'components/Typography';

import StepTitleStyled from './StepTitle.styles';

export interface StepTitleProps {
  number: string;
}

const StepTitle: React.FC<StepTitleProps> = (props) => {
  return (
    <StepTitleStyled className="step-title">
      <div>
        <div className="step-title__label">
          <Typography type="label" labelType="title" color="minor">
            Step {props.number}
          </Typography>
        </div>
        <Divider color="lime" thickness="thick" />
      </div>
    </StepTitleStyled>
  );
};

export default StepTitle;
