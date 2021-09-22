import React from 'react';

import ProcessBarStyled from './ProcessBar.styles';

export type ProcessType = 'complete' | 'incomplete';

export interface ProcessBarProps {
  stepsAmount: number;
  currentStep: number;
}

const ProcessBar: React.FC<ProcessBarProps> = (props) => {
  return (
    <ProcessBarStyled>
      {generateSteps(props.stepsAmount, props.currentStep - 1)}
    </ProcessBarStyled>
  );
};

const generateSteps = (amount: number, currentStep: number) => {
  const steps: React.ReactNode[] = [];
  for (let i = 0; i < amount; i++) {
    if (i < currentStep && currentStep < amount) {
      addStep(steps, 'complete', i);
    } else if (i == amount - 1 && i == currentStep) {
      addStep(steps, 'complete', i);
    } else if (i == amount - 1) {
      addStep(steps, 'incomplete', i);
    } else if (i == currentStep) {
      addStep(steps, 'complete', i);
    } else {
      addStep(steps, 'incomplete', i);
    }
  }
  return steps;
};

const addStep = (
  steps: React.ReactNode[],
  processType: ProcessType,
  processBarPosition: number
) => {
  if (processBarPosition == 0) {
    return steps.push(
      <div className={`process-bar__step process-bar__step--${processType}`} />
    );
  } else {
    return steps.push(
      <div className="process-bar__step-group">
        <div
          className={`process-bar__link process-bar__link--${processType}`}
        />
        <div
          className={`process-bar__step process-bar__step--${processType}`}
        />
      </div>
    );
  }
};

export default ProcessBar;
