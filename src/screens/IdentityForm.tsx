import Head from 'next/head';
import { useEffect } from 'react';

import { RegistrationPageLayout } from 'app/components/AppLayout';
import { IdentityElements } from 'app/components/IdentityElements';
import {
  OnState,
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { AsyncRegion } from 'components/AsyncRegion';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { InformationBanner } from 'components/InformationBanner';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';
import { trackSignUpFlowEvent } from 'tracking';

export const IdentityForm = () => {
  const t = useAppTranslation();
  const events = useAppEvents();
  const isValid = useAppState('forms.identity.validation.valid');
  const isRequesting = useAppState('requests.identityProfile.requesting');

  const isSms = useAppSelector(
    (state) => state.context.auth.patientSource === 'SMS'
  );
  const numberOfAttemptsRemaining = useAppSelector(
    (state) => state.context.auth.identityCheckAttempts
  );

  const anyErrors = numberOfAttemptsRemaining < 5;
  const attemptsExhausted = numberOfAttemptsRemaining === 0;
  const submitButtonText = t('sections.identity.form.confirm');

  useEffect(() => {
    events.identityProfileRequest();
  }, [events]);

  useEffect(() => {
    trackSignUpFlowEvent({
      signUpStep: 'identity',
      signUpMethod: isSms ? 'SMS' : 'email',
      signUpButtonText: submitButtonText,
    });
  }, [isSms, submitButtonText]);

  return (
    <>
      <Head>
        <title>{t('pages.identity.pageTitle')}</title>
      </Head>
      <AsyncRegion pending={isRequesting}>
        <RegistrationPageLayout
          title={t('sections.identity.title')}
          description={t('sections.identity.subTitle')}
        >
          {anyErrors && (
            <InformationBanner
              title={t('sections.identity.errors.title')}
              type="error"
            >
              <Typography type="body">
                {t('sections.identity.errors.attemptsStart')}{' '}
                <strong>{numberOfAttemptsRemaining}</strong>{' '}
                {t('sections.identity.errors.attemptsEnd')}
              </Typography>
              <Button kind="link-medium">Get some help</Button>
            </InformationBanner>
          )}
          <form
            id="authenticationForm"
            onSubmit={(event) => event.preventDefault()}
          >
            <Grid>
              <IdentityElements.DateOfBirth
                label={t('sections.identity.form.dateOfBirth.label')}
              />
              <IdentityElements.ZipCode
                label={t('sections.identity.form.zipCode.label')}
                placeholder={t('sections.identity.form.zipCode.placeholder')}
              />

              {isSms ? (
                <IdentityElements.PhoneNumber
                  label={t('sections.identity.form.phone.label')}
                  placeholder={t('sections.identity.form.phone.placeholder')}
                />
              ) : (
                <IdentityElements.EmailAddress
                  label={t('sections.identity.form.email.label')}
                  placeholder={t('sections.identity.form.email.placeholder')}
                />
              )}
            </Grid>
          </form>

          <OnState
            matches="auth.checkingIdentity"
            fallback={
              <Button
                kind="primary"
                submit={true}
                disabled={!isValid || attemptsExhausted}
                onClick={events.checkIdentity}
                formId="authenticationForm"
              >
                {submitButtonText}
              </Button>
            }
          >
            <Button
              kind="primary"
              submit={true}
              disabled
              prefix={<Spinner />}
              formId="authenticationForm"
            >
              {t('sections.identity.form.checkingIdentity')}
            </Button>
          </OnState>
        </RegistrationPageLayout>
      </AsyncRegion>
    </>
  );
};
