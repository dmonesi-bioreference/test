import Head from 'next/head';
import { useEffect, useState } from 'react';

import { RegistrationPageLayout } from 'app/components/AppLayout';
import { OnBoardingStories } from 'app/components/ContentElements';
import {
  useAppEvents,
  useAppSelector,
  useAppTranslation,
} from 'app/components/Shell';
import { useContent } from 'app/hooks';
import { Button } from 'components/Button';
import { IdentityForm } from 'screens/IdentityForm';
import { trackSignUpFlowEvent } from 'tracking';

export const OnBoarding = () => {
  const t = useAppTranslation();
  const [beginRegistration, setBeginRegistration] = useState(false);
  const { allOnBoardingCardsRequest } = useAppEvents();
  const isSms = useAppSelector(
    (state) => state.context.auth.patientSource === 'SMS'
  );
  const submitButtonText = t('pages.onboarding.actions.beginRegistration');

  useEffect(() => {
    if (!beginRegistration) {
      trackSignUpFlowEvent({
        signUpStep: 'start',
        signUpMethod: isSms ? 'SMS' : 'email',
        signUpButtonText: submitButtonText,
      });
    }
  }, [beginRegistration, isSms, submitButtonText]);

  useEffect(allOnBoardingCardsRequest, [allOnBoardingCardsRequest]);

  const [{ loadingOnBoardingCards }] = useContent();

  return beginRegistration ? (
    <IdentityForm />
  ) : (
    <>
      <Head>
        <title>{t('pages.onboarding.title')}</title>
      </Head>
      <RegistrationPageLayout isLoading={loadingOnBoardingCards}>
        <OnBoardingStories />
        <Button kind="primary" onClick={() => setBeginRegistration(true)}>
          {submitButtonText}
        </Button>
      </RegistrationPageLayout>
    </>
  );
};
