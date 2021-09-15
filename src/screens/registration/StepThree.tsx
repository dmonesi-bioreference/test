import {
  Button,
  Heading,
  Input,
  PageLayout,
  PageSection,
  Select,
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
            }}
          >
            <Heading level="4">
              {t('sections.furtherRegistration.stepThree.subTitle')}
            </Heading>
          </div>
        }
      >
        <div style={{ marginBottom: tokens.spacingXxSmall }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <Select
              label={t(
                'sections.furtherRegistration.form.relationshipToPatient.label'
              )}
              name="select-relationship"
              size="medium"
              labelPosition="top"
            >
              <option value="option1">Caregiver</option>
              <option value="option2">Parent</option>
            </Select>
          </div>

          <div style={{ marginBottom: tokens.spacing }}>
            <ToolTip
              helperMessage={t(
                'sections.furtherRegistration.form.relationshipToPatient.toolTipHelperMessage'
              )}
              title={t(
                'sections.furtherRegistration.form.relationshipToPatient.toolTipTitle'
              )}
            >
              <Typography type="helper-text" color="white">
                {t(
                  'sections.furtherRegistration.form.relationshipToPatient.toolTipContent'
                )}
              </Typography>
            </ToolTip>
          </div>
        </div>

        <div style={{ marginBottom: tokens.spacingXxSmall }}>
          <div style={{ marginBottom: tokens.spacing }}>
            <Input
              type="date"
              label={t('sections.furtherRegistration.form.dob.label')}
              name="dob"
            />
          </div>

          <div style={{ marginBottom: tokens.spacing }}>
            <ToolTip
              helperMessage={t(
                'sections.furtherRegistration.form.dob.toolTipHelperMessage'
              )}
              title={t('sections.furtherRegistration.form.dob.toolTipTitle')}
            >
              <Typography type="helper-text" color="white">
                {t('sections.furtherRegistration.form.dob.toolTipContent')}
              </Typography>
            </ToolTip>
          </div>
        </div>

        <Button onClick={events.nextStep} kind="primary">
          {t('sections.furtherRegistration.next')}
        </Button>
      </PageSection>
    </PageLayout>
  );
};
