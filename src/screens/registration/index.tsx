import { OnState } from 'components';

import { StepFour } from './StepFour';
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

export function RegistrationWizard() {
  return (
    <>
      <OnState matches="app.registration.one">
        <StepOne />
      </OnState>
      <OnState matches="app.registration.two">
        <StepTwo />
      </OnState>
      <OnState matches="app.registration.three">
        <StepThree />
      </OnState>
      <OnState matches="app.registration.four">
        <StepFour />
      </OnState>
    </>
  );
}
