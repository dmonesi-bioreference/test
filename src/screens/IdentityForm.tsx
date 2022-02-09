import Head from 'next/head';
import { useEffect } from 'react';

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
import { InformationBanner } from 'components/InformationBanner';
import { PageLayout } from 'components/PageLayout';
import { PageSection } from 'components/PageSection';
import { Spinner } from 'components/Spinner';
import { Heading, Typography } from 'components/Typography';
import { tokens } from 'styles/tokens';

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

  useEffect(() => {
    events.identityProfileRequest();
  }, [events]);

  return (
    <>
      <Head>
        <title>{t('pages.identity.pageTitle')}</title>
      </Head>
      <PageLayout isWithoutFooter>
        <AsyncRegion pending={isRequesting}>
          <PageSection>
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacingXLarge,
                marginBottom: tokens.spacing,
              }}
            >
              <Heading level="1" alignment="center">
                {t('sections.identity.title')}
              </Heading>
              <Heading level="4" alignment="center">
                {t('sections.identity.subTitle')}
              </Heading>
            </div>
            {anyErrors ? (
              <InformationBanner
                title={t('sections.identity.errors.title')}
                type="error"
              >
                <div style={{ marginBottom: tokens.spacing }}>
                  <Typography type="body">
                    {t('sections.identity.errors.attemptsStart')}{' '}
                    <strong>{numberOfAttemptsRemaining}</strong>{' '}
                    {t('sections.identity.errors.attemptsEnd')}
                  </Typography>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Button kind="link-medium">Get some help</Button>
                </div>
              </InformationBanner>
            ) : null}
            <form onSubmit={(event) => event.preventDefault()}>
              <IdentityElements.DateOfBirth
                label={t('sections.identity.form.dateOfBirth.label')}
              />
              <IdentityElements.ZipCode
                label={t('sections.identity.form.zipCode.label')}
                placeholder={t('sections.identity.form.zipCode.placeholder')}
              />
              <div style={{ marginBottom: tokens.spacingXxLarge }}>
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
              </div>
              <OnState
                matches="auth.checkingIdentity"
                fallback={
                  <Button
                    kind="primary"
                    submit={true}
                    disabled={!isValid || attemptsExhausted}
                    onClick={events.checkIdentity}
                  >
                    {t('sections.identity.form.confirm')}
                  </Button>
                }
              >
                <Button
                  kind="primary"
                  submit={true}
                  disabled
                  prefix={<Spinner />}
                >
                  {t('sections.identity.form.checkingIdentity')}
                </Button>
              </OnState>
            </form>
          </PageSection>
        </AsyncRegion>
      </PageLayout>
    </>
  );
};
