import ProcessBarStyled from './ProcessBar.styles';

export interface ProcessBarProps {
  /** The total number of steps in the process bar. */
  stepsAmount: number;
  /** The number of complete steps in the process bar. */
  currentStep: number;
}

const ProcessBar: React.FC<ProcessBarProps> = (props) => {
  const steps = Array(props.stepsAmount)
    .fill(null)
    .map((_, i) => i);

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
