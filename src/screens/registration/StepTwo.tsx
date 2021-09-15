import {
  Button,
  Heading,
  Icon,
  Input,
  PageLayout,
  PageSection,
  ToolTip,
  Typography,
  useAppEvents,
  useAppTranslation,
} from 'components';
import { tokens } from 'styles';

export const StepTwo = () => {
  const t = useAppTranslation();
  const events = useAppEvents();

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
            <Heading level="4">
              {t('sections.furtherRegistration.stepTwo.subTitle')}
            </Heading>
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxSmall }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <Input
              type="email"
              label={t('sections.furtherRegistration.form.email.label')}
              name="email"
              prefix={<Icon name="mail" color="primary" />}
              placeholder={t(
                'sections.furtherRegistration.form.email.placeholder'
              )}
            />
          </div>

          <Input
            type="number"
            label={t('sections.furtherRegistration.form.number.label')}
            name="mobile"
            placeholder={t(
              'sections.furtherRegistration.form.number.placeholder'
            )}
            prefix={<Icon name="phone" color="primary" />}
          />
        </div>
        <div style={{ marginBottom: tokens.spacingXxLarge }}>
          <ToolTip
            helperMessage={t(
              'sections.furtherRegistration.form.number.toolTipHelperMessage'
            )}
            title={t('sections.furtherRegistration.form.number.toolTipTitle')}
          >
            <Typography type="helper-text" color="white">
              {t('sections.furtherRegistration.form.number.toolTipContent')}
            </Typography>
            <Button kind="small" color="light">
              {t('sections.furtherRegistration.form.number.toolTipLink')}
            </Button>
          </ToolTip>
        </div>

        <Button onClick={events.nextStep} kind="primary">
          {t('sections.furtherRegistration.next')}
        </Button>
      </PageSection>
    </PageLayout>
  );
};
