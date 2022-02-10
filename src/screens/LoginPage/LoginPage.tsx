import Head from 'next/head';

import { AppLayout } from 'app/components/AppLayout';
import { LoginElements } from 'app/components/LoginElements';
import {
  OnState,
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app/components/Shell';
import { ActionGroup } from 'components/ActionGroup';
import { Button } from 'components/Button';
import { Grid } from 'components/Grid';
import { InformationBanner } from 'components/InformationBanner';
import { Spinner } from 'components/Spinner';
import { Typography } from 'components/Typography';
import { tokens } from 'styles/tokens';

export const LoginPage = () => {
  const t = useAppTranslation();
  const isValid = useAppState('forms.login.validation.valid');
  const { authenticate } = useAppEvents();
  const errors = useAppSelector((state) => state.context.auth.errors);
  const anyErrors = errors.length > 0;

  return (
    <>
      <Head>
        <title>{t('pages.login.pageTitle')}</title>
      </Head>
      <AppLayout>
        <Grid spacing="extraLarge" verticalPadding="large">
          <Typography type="heading" level="1" alignment="left">
            {t('pages.login.title')}
          </Typography>
          <Typography type="body" level="4" alignment="left">
            {t('pages.login.description')}
          </Typography>
        </Grid>
        {anyErrors ? (
          <Grid verticalPadding="medium">
            <InformationBanner
              title={t('sections.identity.errors.title')}
              type="error"
            >
              <div style={{ marginBottom: tokens.spacing }}>
                {errors.map((error) => (
                  <Typography key={error} type="body">
                    <strong>{error}</strong>
                  </Typography>
                ))}
              </div>
              {/* TODO: Should link this to customer support, hiding for now. */}
              {/* <div style={{ textAlign: 'center' }}>
                <Button kind="link-medium">Get some help</Button>
              </div> */}
            </InformationBanner>
          </Grid>
        ) : null}
        <div style={{ marginBottom: tokens.spacing }}>
          <LoginElements.EmailAddress
            label={t('forms.login.email.label')}
            placeholder={t('forms.login.email.placeholder')}
          />
        </div>
        <div style={{ marginBottom: tokens.spacingXLarge }}>
          <LoginElements.Password
            label={t('forms.login.password.label')}
            placeholder={t('forms.login.password.placeholder')}
          />
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <ActionGroup>
            <OnState
              matches="auth.authenticating"
              fallback={
                <Button
                  submit={true}
                  kind="primary"
                  disabled={!isValid}
                  onClick={authenticate}
                >
                  {t('pages.login.actions.primary.label')}
                </Button>
              }
            >
              <Button
                kind="primary"
                submit={true}
                disabled
                prefix={<Spinner />}
              >
                {t('pages.login.actions.primary.loadingLabel')}
              </Button>
            </OnState>
            <Button kind="link-medium">
              {t('pages.login.actions.secondary.label')}
            </Button>
          </ActionGroup>
        </form>
      </AppLayout>
    </>
  );
};
