import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';
import {
  Button,
  Card,
  Divider,
  Icon,
  PageLayout,
  PageSection,
  Typography,
} from 'components';
import {
  TypographyColor,
  TypographyHeadingLevel,
} from 'components/Typography/Typography';
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

// -- helpers --

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

const iconBesideBodyText = (
  iconName: string,
  text: string,
  marginBottom?: string
) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: marginBottom,
      }}
    >
      <div style={{ marginRight: tokens.spacingLarge }}>
        <Icon name={iconName} kind="custom" />
      </div>
      <Typography type="body">{text}</Typography>
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
      href="#"
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
      <Typography type="category">Real family story</Typography>
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
    {iconBesideBodyText(
      'healthcare-provider',
      'Find peace of mind and get your burning questions answered',
      tokens.spacingXLarge
    )}
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
      {iconBesideBodyText(
        iconName,
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.'
      )}
    </Card>
  );
};

const scienceSectionHeader = buildHeading('2', 'The science');
