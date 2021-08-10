import React from 'react';

import Step, { StepPosition } from 'components/Step/Step';

import ProgressBarStyled from './ProgressBar.styles';

export interface ProgressBarProps {
  stepsAmount: number;
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <ProgressBarStyled>
      {generateSteps(props.stepsAmount, props.currentStep - 1)}
    </ProgressBarStyled>
  );
};

const generateSteps = (amount: number, currentStep: number) => {
  const steps: React.ReactNode[] = [];
  for (let i = 0; i < amount; i++) {
    if (i < currentStep) {
      addStep(steps, i, 'past');
    } else if (i == currentStep) {
      addStep(steps, i, 'current');
    } else if (i == currentStep + 1) {
      addStep(steps, i, 'next');
    } else {
      addStep(steps, i, 'future');
    }
  }
  return steps;
};

const addStep = (
  steps: React.ReactNode[],
  number: number,
  position: StepPosition
) => {
  return steps.push(<Step number={number + 1} position={position} />);
};

export default ProgressBar;
