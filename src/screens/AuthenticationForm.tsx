import {
  Button,
  Heading,
  Icon,
  Input,
  PageLayout,
  PageSection,
  useAppTranslation,
} from 'components';
import { tokens } from 'styles';

export const AuthenticationForm = () => {
  const t = useAppTranslation();
  return (
    <PageLayout>
      <PageSection
        header={
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacingXLarge,
            }}
          >
            <Heading level="1">{t('sections.authentication.title')}</Heading>
            <Heading level="4">{t('sections.authentication.subTitle')}</Heading>
          </div>
        }
      >
        <Input
          type="date"
          label={t('sections.authentication.form.dateOfBirth.label')}
          name="date"
        />
        <Input
          type="text"
          label={t('sections.authentication.form.zipCode.label')}
          name="zipcode"
          placeholder={t('sections.authentication.form.zipCode.placeholder')}
          prefix={<Icon name="location-marker" color="primary" />}
        />
        <div style={{ marginBottom: tokens.spacingXxLarge }}>
          <Input
            type="email"
            label={t('sections.authentication.form.email.label')}
            name="email"
            placeholder={t('sections.authentication.form.email.placeholder')}
            prefix={<Icon name="user" color="primary" />}
          />
        </div>
        <Button kind="primary" submit={true}>
          {t('sections.authentication.form.confirm')}
        </Button>
      </PageSection>
    </PageLayout>
  );
};
