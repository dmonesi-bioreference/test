import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';
import {
  Button,
  Card,
  Divider,
  Icon,
  PageLayout,
  PageSection,
  ProgressBar,
  Typography,
  TypographyColor,
  TypographyHeadingLevel,
} from 'components';
import { tokens } from 'styles';

import Main from '.';

export default {
  title: 'Templates/Main',
};

export const waitingLandingPage = () => (
  <Main>
    <div style={{ width: 375 }}>
      <PageLayout>
        <PageSection header={resultsStatusSectionHeader}>
          {testInProcessCard}
        </PageSection>

        <PageSection header={resourcesSectionHeader}>
          {articleCard}
          {FAQsCard}
        </PageSection>

        <PageSection header={careTeamSectionHeader}>{careTeamCard}</PageSection>

        <PageSection header={scienceSectionHeader}>
          {factCard('101 on Genetics', 'helix')}
          {factCard('Whole Genome Sequencing', 'atom')}
        </PageSection>
      </PageLayout>
    </div>
  </Main>
);

export const testingProcessPage = () => (
  <Main>
    <div style={{ width: 375 }}>
      <PageLayout>
        <PageSection header={testingProcessHeader}>
          {currentStepCard}
          {processBreakdownCard}
        </PageSection>
      </PageLayout>
    </div>
  </Main>
);

// -- helpers --

const dummyText =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.';

const buildHeading = (
  level: TypographyHeadingLevel,
  text: string,
  color?: TypographyColor
) => {
  return (
    <Typography type="heading" level={level} color={color}>
      {text}
    </Typography>
  );
};

const Flag = (
  props: Props<{
    iconName: string;
    marginBottom?: string;
  }>
) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: props.marginBottom,
      }}
    >
      <div style={{ marginRight: tokens.spacingLarge }}>
        <Icon name={props.iconName} kind="custom" />
      </div>
      <Typography type="body">{props.children}</Typography>
    </div>
  );
};

// -- results status section --

const testInProcessCard = (
  <Card>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      <div style={{ marginBottom: tokens.spacingXxSmall }}>
        {buildHeading('2', 'Test in process')}
      </div>
      {buildHeading('4', 'Everything is on track')}
    </div>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      {buildHeading('6', 'No updates since your last login', 'minor')}
    </div>
    <div style={{ marginBottom: tokens.spacingLarge }}>
      <div style={{ marginBottom: tokens.spacingXxxSmall }}>
        {buildHeading('5', 'Expect results in 7-10 days')}
      </div>
      {buildHeading('7', 'Timing may vary')}
    </div>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      <Button
        kind="tertiary"
        href="#"
        prefix={<Icon name="device-mobile" color="primary" />}
      >
        Receive progress updates
      </Button>
    </div>
    <div style={{ marginBottom: tokens.spacingLarge }}>
      <Divider />
    </div>
    <Button
      kind="tertiary"
      href="?path=/story/templates-main--testing-process-page"
      suffix={<Icon name="chevron-right" color="primary" />}
      spreadContent={true}
    >
      See where you are in the process
    </Button>
  </Card>
);

const resultsStatusSectionHeader = (
  <div style={{ marginBottom: tokens.spacingXxSmall }}>
    <div style={{ marginBottom: tokens.spacingXxxSmall }}>
      <Typography type="label" color="minor">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Child's name
      </Typography>
    </div>

    {buildHeading('5', 'Lisa Consuela Jackson')}
  </div>
);

// -- resources section --

const articleCard = (
  <Card header={<img src={InTheNICUImage} alt="In The NICU" />}>
    <div style={{ marginBottom: tokens.spacingXxSmall }}>
      <Typography type="category" color="primary">
        Real family story
      </Typography>
    </div>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      {buildHeading(
        '2',
        'How other parents have coped with this time of uncertainty.'
      )}
    </div>
    <div style={{ marginBottom: tokens.spacingLarge }}>
      <Typography type="body">
        They said it was supposed to be the most wonderful experience of my
        life. But when Jonas was born with complications I struggled..
      </Typography>
    </div>
    <Button kind="primary">Read Story</Button>
  </Card>
);

const FAQsCard = (
  <Card>
    <div style={{ marginBottom: tokens.spacingLarge }}>
      {buildHeading('2', 'NICU FAQs')}
    </div>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      <Button kind="secondary" href="#">
        How do I care for my baby after the NICU?
      </Button>
    </div>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      <Button kind="secondary" href="#">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        What happens if my child doesn't get a diagnosis?
      </Button>
    </div>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      <Button kind="secondary" href="#">
        Can I still have more children?
      </Button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button kind="tertiary" href="#">
        View all
      </Button>
    </div>
  </Card>
);

const resourcesSectionHeader = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      <div
        style={{
          marginRight: tokens.spacingXxxSmall,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {buildHeading('2', 'Resources')}
      </div>
      {buildHeading('2', '(In the NICU)', 'minor')}
    </div>

    <Icon name="chevron-right" />
  </div>
);

// -- care team section --

const careTeamCard = (
  <Card>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      {buildHeading('2', 'Talk to a Genetic Counselor')}
    </div>
    <Flag iconName="healthcare-provider" marginBottom={tokens.spacingXLarge}>
      Find peace of mind and get your burning questions answered
    </Flag>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      {buildHeading('7', "Starting today, we're here for you.")}
    </div>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      <Button kind="primary">Call</Button>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button kind="tertiary" href="#">
        Learn about genetic counselling
      </Button>
    </div>
  </Card>
);

const careTeamSectionHeader = buildHeading('2', 'Care team');

// -- science section --

const factCard = (headingText: string, iconName: string) => {
  return (
    <Card>
      <div style={{ marginBottom: tokens.spacingXLarge }}>
        {buildHeading('2', headingText)}
      </div>
      <Flag iconName={iconName}>{dummyText}</Flag>
    </Card>
  );
};

const scienceSectionHeader = buildHeading('2', 'The science');

// -- testing process page --

const testingProcessHeader = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: tokens.spacingMedium,
    }}
  >
    {buildHeading('2', 'The genetic testing process')}
    <ProgressBar stepsAmount={4} currentStep={2} />
  </div>
);

const Step = (props: Props<{ stage: string; title: string }>) => {
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
        <Typography type="category">Step {props.stage}</Typography>
        {buildHeading('3', props.title)}
      </div>
      {props.children}
    </div>
  );
};

const SubStep = (props: Props<{ title: string; current?: boolean }>) => {
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
          <Typography type="label" color="primary">
            Current
          </Typography>
        ) : null}
        {buildHeading('5', props.title, titleColor)}
      </div>
      <Typography type="body">{props.children}</Typography>
    </div>
  );
};

const currentStepCard = (
  <Card>
    <div style={{ marginBottom: tokens.spacingXxSmall }}>
      <Typography type="category">Current step</Typography>
    </div>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      {buildHeading('2', '2: Lab steps - Amplifying', 'primary')}
    </div>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      <Typography type="body">{dummyText}</Typography>
    </div>
    <div style={{ marginBottom: tokens.spacingXxSmall }}>
      {buildHeading('4', 'Everything is on track')}
    </div>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      {buildHeading('6', 'No updates since your last login', 'minor')}
    </div>
    <div style={{ marginBottom: tokens.spacingXxxSmall }}>
      {buildHeading('5', 'Expect results in 7-10 days')}
    </div>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      <Typography type="body">
        Results typically are returned in 7 days, but can take up to 5 weeks.
      </Typography>
    </div>
    <div style={{ marginBottom: tokens.spacingXLarge }}>
      <Typography type="helper-text" color="minor">
        NOTE: time is not an indicator of case difficulty or a positive test
        result. Please allow time for your child’s genetic test to process
        before calling the lab or your doctor’s office.
      </Typography>
    </div>
    <Button
      kind="tertiary"
      href="#"
      prefix={<Icon name="device-mobile" color="primary" />}
    >
      Receive progress updates
    </Button>
  </Card>
);

const processBreakdownCard = (
  <Card>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      {buildHeading('2', 'Process Breakdown')}
    </div>
    <div style={{ marginBottom: tokens.spacingMedium }}>
      <Typography type="body">{dummyText}</Typography>
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
      <Step stage="1" title="Samples Delivered">
        <Typography type="body">{dummyText}</Typography>
      </Step>
      <Step stage="2" title="Lab Steps">
        <SubStep title="Extracting">{dummyText}</SubStep>
        <SubStep title="Amplifying" current={true}>
          {dummyText}
        </SubStep>
        <SubStep title="Sequencing">{dummyText}</SubStep>
      </Step>
    </div>
  </Card>
);
