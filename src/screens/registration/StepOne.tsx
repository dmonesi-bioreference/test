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

export const StepOne = () => {
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
            <Heading level="1">
              {t('sections.furtherRegistration.stepOne.title')}
            </Heading>
            <Heading level="4">
              {t('sections.furtherRegistration.stepOne.subTitle')}
            </Heading>
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxLarge }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <Input
              type="text"
              label={t('sections.furtherRegistration.form.firstName.label')}
              name="first-name"
              placeholder={t(
                'sections.furtherRegistration.form.firstName.placeholder'
              )}
              prefix={<Icon name="user" color="primary" />}
            />
          </div>
          <Input
            type="text"
            label={t('sections.furtherRegistration.form.lastName.label')}
            name="last-name"
            placeholder={t(
              'sections.furtherRegistration.form.lastName.placeholder'
            )}
            prefix={<Icon name="user" color="primary" />}
          />
        </div>

        <Button kind="primary">{t('sections.furtherRegistration.next')}</Button>
      </PageSection>
    </PageLayout>
  );
};
