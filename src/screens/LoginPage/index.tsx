import { useAppTranslation } from 'app';
import {
  Button,
  PageLayout,
  Typography,
  Icon,
  Input,
  PasswordInput,
} from 'components';
import { tokens } from 'styles';

export const LoginPage = () => {
  const t = useAppTranslation();

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
        <Input
          aria-hidden="true"
          type="text"
          label={t('sections.login.username')}
          name="userName"
          placeholder={t('sections.login.username')}
          prefix={<Icon name="user" color="primary" />}
        />
      </div>
      <div style={{ marginBottom: tokens.spacingXLarge }}>
        <PasswordInput
          label={t('sections.login.password')}
          name="password"
          placeholder={t('sections.login.password')}
        />
      </div>
      <div style={{ marginBottom: tokens.spacing }}>
        <Button submit={true} kind="primary" href="/data-consent">
          {t('sections.login.login')}
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button kind="link-medium">{t('sections.login.trouble')}</Button>
      </div>
    </PageLayout>
  );
};
