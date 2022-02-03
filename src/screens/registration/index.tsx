import Head from 'next/head';

import { OnState, useAppTranslation } from 'app/components/Shell';

import { StepFour } from './StepFour';
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

export function RegistrationWizard() {
  const t = useAppTranslation();

  return (
    <>
      <Head>
        <title>{t('pages.registration.pageTitle')}</title>
      </Head>
      <OnState matches="registration.one">
        <StepOne />
      </OnState>
      <OnState matches="registration.two">
        <StepTwo />
      </OnState>
      <OnState matches="registration.three">
        <StepThree />
      </OnState>
      <OnState matches="registration.four">
        <StepFour />
      </OnState>
    </>
  );
}
