import {
  LoginElements,
  OnState,
  useAppEvents,
  useAppState,
  useAppTranslation,
} from 'app';
import { Button, PageLayout, Spinner, Typography } from 'components';
import { tokens } from 'styles';

export const LoginPage = () => {
  const t = useAppTranslation();
  const isValid = useAppState('forms.login.validation.valid');
  const { authenticate } = useAppEvents();

  return (
    <PageLayout containsCards={true}>
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button kind="link-medium">{t('sections.login.trouble')}</Button>
      </div>
    </PageLayout>
  );
};
