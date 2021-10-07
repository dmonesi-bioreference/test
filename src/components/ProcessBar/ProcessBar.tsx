import React from 'react';

import ProcessBarStyled from './ProcessBar.styles';

export interface ProcessBarProps {
  stepsAmount: number;
  currentStep: number;
}

const ProcessBar: React.FC<ProcessBarProps> = ({
  currentStep,
  stepsAmount,
}) => {
  const steps = [...new Array(stepsAmount).keys()];

  return (
    <ProcessBarStyled>
      {steps.map((step) => {
        if (step === 0) {
          return (
            <div
              key={step}
              className="process-bar__step process-bar__step--complete"
            />
          );
        } else {
          const processType =
            step > currentStep - 1 ? 'incomplete' : 'complete';

          return (
            <div key={step} className="process-bar__step-group">
              <div
                className={`process-bar__link process-bar__link--${processType}`}
              />
              <div
                className={`process-bar__step process-bar__step--${processType}`}
              />
            </div>
          );
        }
      })}
    </ProcessBarStyled>
  );
};

export default ProcessBar;
