import {
  Button,
  Card,
  Divider,
  Heading,
  Icon,
  PageLayout,
  PageSection,
  ProgressBar,
  Typography,
  useAppTranslation,
} from 'components';
import { tokens } from 'styles';

export function TestingProcess() {
  const t = useAppTranslation();
  return (
    <PageLayout>
      <PageSection
        header={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacingMedium,
            }}
          >
            <Heading>The Genetic Testing Process</Heading>
            <ProgressBar stepsAmount={4} currentStep={2} />
          </div>
        }
      >
        <Card>
          <div style={{ marginBottom: tokens.spacingXxSmall }}>
            <Typography type="label" labelType="title">
              {t('sections.results.steps.title')}
            </Typography>
          </div>
          <div style={{ marginBottom: tokens.spacingMedium }}>
            <Heading>
              {t('sections.results.steps.current.two.amplifying.title')}
            </Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Typography type="body">
              {t('sections.results.steps.current.two.amplifying.details')}
            </Typography>
          </div>
          <div style={{ marginBottom: tokens.spacingXxSmall }}>
            <Heading level="4">{t('sections.results.onTrack')}</Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Heading level="6" color="minor">
              {t('sections.results.noUpdates')}
            </Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingXxxSmall }}>
            <Heading level="5">
              {t('sections.results.estimate', { estimate: '7-10' })}
            </Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingMedium }}>
            <Typography type="body">{t('sections.results.caveat')}</Typography>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Typography type="helper-text" color="minor">
              {t('sections.results.expectation')}
            </Typography>
          </div>
          <Button
            kind="tertiary"
            href="#"
            prefix={<Icon name="device-mobile" color="primary" />}
          >
            {t('sections.results.getUpdates')}
          </Button>
        </Card>
        <Card>
          <div style={{ marginBottom: tokens.spacingMedium }}>
            <Heading>{t('sections.results.process.title')}</Heading>
          </div>
          <div style={{ marginBottom: tokens.spacingMedium }}>
            <Typography type="body">
              {t('sections.results.process.details')}
            </Typography>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
            <Divider />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacingXxLarge,
            }}
          >
            <Step stage="1" title={t('sections.results.process.one.title')}>
              <Typography type="body">
                {t('sections.results.process.one.details')}
              </Typography>
            </Step>
            <Step stage="2" title={t('sections.results.process.two.title')}>
              <SubStep
                title={t('sections.results.process.two.extracting.subTitle')}
              >
                {t('sections.results.process.two.extracting.details')}
              </SubStep>
              <SubStep
                title={t('sections.results.process.two.amplifying.subTitle')}
                current={true}
              >
                {t('sections.results.process.two.amplifying.details')}
              </SubStep>
              <SubStep
                title={t('sections.results.process.two.sequencing.subTitle')}
              >
                {t('sections.results.process.two.sequencing.details')}
              </SubStep>
            </Step>
          </div>
        </Card>
      </PageSection>
    </PageLayout>
  );
}

// -- helpers --

const Step = (props: Props<{ stage: string; title: React.ReactNode }>) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacingLarge,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacingXxSmall,
        }}
      >
        <Typography type="label" labelType="title">
          Step {props.stage}
        </Typography>
        <Heading level="3">{props.title}</Heading>
      </div>
      {props.children}
    </div>
  );
};

const SubStep = (
  props: Props<{ title: React.ReactNode; current?: boolean }>
) => {
  const titleColor = props.current ? 'primary' : 'default';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: tokens.spacingXxSmall,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: tokens.spacingXxxSmall,
        }}
      >
        {props.current ? (
          <Typography type="label" labelType="display" color="primary">
            Current
          </Typography>
        ) : null}
        <Heading level="5" color={titleColor}>
          {props.title}
        </Heading>
      </div>
      <Typography type="body">{props.children}</Typography>
    </div>
  );
};
