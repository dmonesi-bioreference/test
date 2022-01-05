import {
  LoginElements,
  OnState,
  useAppEvents,
  useAppSelector,
  useAppState,
  useAppTranslation,
} from 'app';
import { Button } from 'components/Button';
import { InformationBanner } from 'components/InformationBanner';
import { PageLayout } from 'components/PageLayout';
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
    <PageLayout containsCards={true}>
      {anyErrors ? (
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
          <div style={{ textAlign: 'center' }}>
            <Button kind="link-medium">Get some help</Button>
          </div>
        </InformationBanner>
      ) : null}
      <div style={{ marginBottom: tokens.spacingXLarge }}>
        <Typography type="heading" level="1" alignment="center">
          {t('sections.login.welcome')}
        </Typography>
      </div>
      <div style={{ marginBottom: tokens.spacingXLarge }}>
        <Typography type="heading" level="4" alignment="center">
          {t('sections.login.journey')}
        </Typography>
      </div>
      <div style={{ marginBottom: tokens.spacing }}>
        <LoginElements.EmailAddress
          label={t('sections.login.form.email.label')}
          placeholder={t('sections.login.form.email.placeholder')}
        />
      </div>
      <div style={{ marginBottom: tokens.spacingXLarge }}>
        <LoginElements.Password
          label={t('sections.login.form.password.label')}
          placeholder={t('sections.login.form.password.placeholder')}
        />
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        <div style={{ marginBottom: tokens.spacing }}>
          <OnState
            matches="auth.authenticating"
            fallback={
              <Button
                submit={true}
                kind="primary"
                disabled={!isValid}
                onClick={authenticate}
              >
                {t('sections.login.form.login')}
              </Button>
            }
          >
            <Button kind="primary" submit={true} disabled prefix={<Spinner />}>
              {t('sections.login.form.checkingLogin')}
            </Button>
          </OnState>
        </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button kind="link-medium">{t('sections.login.trouble')}</Button>
      </div>
    </PageLayout>
  );
};
