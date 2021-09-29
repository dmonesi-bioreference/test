import {
  Button,
  Heading,
  Input,
  InputHelper,
  PageLayout,
  PageSection,
  ProcessBar,
  Select,
  StepTitle,
  ToolTip,
  Typography,
  useAppEvents,
  useAppTranslation,
} from 'components';
import { tokens } from 'styles';

export const StepThree = () => {
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
            <StepTitle number="3" />
            <Heading level="4">
              {t('sections.furtherRegistration.stepThree.subTitle')}
            </Heading>
            <ProcessBar stepsAmount={4} currentStep={3} />
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxSmall }}>
          <div style={{ marginBottom: tokens.spacingXxSmall }}>
            <Select
              label={t(
                'sections.furtherRegistration.form.relationshipToPatient.label'
              )}
              name="select-relationship"
              size="medium"
              labelPosition="top"
              inputHelper={
                <InputHelper
                  helperText={t(
                    'sections.furtherRegistration.form.relationshipToPatient.toolTipHelperMessage'
                  )}
                  toolTip={
                    <ToolTip
                      title={t(
                        'sections.furtherRegistration.form.relationshipToPatient.toolTipTitle'
                      )}
                      placement="bottom"
                    >
                      <Typography type="helper-text" color="white">
                        {t(
                          'sections.furtherRegistration.form.relationshipToPatient.toolTipContent'
                        )}
                      </Typography>
                    </ToolTip>
                  }
                />
              }
            >
              <option value="option1">Caregiver</option>
              <option value="option2">Parent</option>
            </Select>
          </div>
        </div>

        <div style={{ marginBottom: tokens.spacingXxxLarge }}>
          <Input
            type="date"
            label={t('sections.furtherRegistration.form.dob.label')}
            name="dob"
            inputHelper={
              <InputHelper
                helperText={t(
                  'sections.furtherRegistration.form.dob.toolTipHelperMessage'
                )}
                toolTip={
                  <ToolTip
                    title={t(
                      'sections.furtherRegistration.form.dob.toolTipTitle'
                    )}
                    placement="bottom"
                  >
                    <Typography type="helper-text" color="white">
                      {t(
                        'sections.furtherRegistration.form.dob.toolTipContent'
                      )}
                    </Typography>
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
