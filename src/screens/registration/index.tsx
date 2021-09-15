import { OnState } from 'components';

import { StepFour } from './StepFour';
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

export function RegistrationWizard() {
  return (
    <>
      <OnState matches="app.authenticating.signup.one">
        <StepOne />
      </OnState>
      <OnState matches="app.authenticating.signup.two">
        <StepTwo />
      </OnState>
      <OnState matches="app.authenticating.signup.three">
        <StepThree />
      </OnState>
      <OnState matches="app.authenticating.signup.four">
        <StepFour />
      </OnState>
    </>
  );
}
