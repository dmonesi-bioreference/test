import {
  Button,
  Heading,
  Icon,
  Input,
  InputHelper,
  PageLayout,
  PageSection,
  ProcessBar,
  StepTitle,
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
              marginBottom: tokens.spacingXxLarge,
            }}
          >
            <StepTitle number="2" />
            <Heading level="4">
              {t('sections.furtherRegistration.stepTwo.subTitle')}
            </Heading>
            <ProcessBar stepsAmount={4} currentStep={2} />
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxxLarge }}>
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
            inputHelper={
              <InputHelper
                helperText={t(
                  'sections.furtherRegistration.form.number.toolTipHelperMessage'
                )}
                toolTip={
                  <ToolTip
                    title={t(
                      'sections.furtherRegistration.form.number.toolTipTitle'
                    )}
                    placement="bottom"
                  >
                    <Typography type="helper-text" color="white">
                      {t(
                        'sections.furtherRegistration.form.number.toolTipContent'
                      )}
                    </Typography>
                    <Button kind="small" color="light">
                      {t(
                        'sections.furtherRegistration.form.number.toolTipLink'
                      )}
                    </Button>
                  </ToolTip>
                }
              />
            }
          />
        </div>

        <Button onClick={events.nextStep} kind="primary">
          {t('sections.furtherRegistration.next')}
        </Button>
      </PageSection>
    </PageLayout>
  );
};
