import ProcessBarStyled from './ProcessBar.styles';

export interface ProcessBarProps {
  stepsAmount: number;
  currentStep: number;
}

const ProcessBar: React.FC<ProcessBarProps> = (props) => {
  const steps = [...new Array(props.stepsAmount).keys()];

  return (
    <ProcessBarStyled>
      {steps.map((step) => {
        if (step === 0) {
          return (
            <div
              key={step}
              className="process-bar__step process-bar__step--complete"
            ></div>
          );
        } else {
          const processType =
            step > props.currentStep - 1 ? 'incomplete' : 'complete';

          return (
            <div key={step} className="process-bar__step-group">
              <div
                className={`process-bar__link process-bar__link--${processType}`}
              ></div>
              <div
                className={`process-bar__step process-bar__step--${processType}`}
              ></div>
            </div>
          );
        }
      })}
    </ProcessBarStyled>
  );
};

export default ProcessBar;
