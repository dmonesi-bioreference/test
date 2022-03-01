import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app';
import { PageSection } from 'components/PageSection';
import { Typography } from 'components/Typography';
import { tokens } from 'styles';

import {
  AppLayout,
  ContentPageLayout,
  HomePageLayout,
  MainNavPageLayout,
  PreLoginPageLayout,
  RegistrationPageLayout,
  TerminusPageLayout,
} from './AppLayout';

export default {
  component: AppLayout,
  title: 'App/AppLayout',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
};

const Template: Story = (args) => (
  <Shell>
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '24px',
      }}
    >
      <div style={{ width: 375 }}>
        <Typography type="heading" level="2">
          Configurable
        </Typography>
        <AppLayout {...args}>
          <PageSection>
            <ExampleSection />
            <ExampleSection />
            <ExampleSection />
          </PageSection>
        </AppLayout>
      </div>
      <div style={{ width: 375 }}>
        <Typography type="heading" level="2">
          Registration Page Layout
        </Typography>
        <RegistrationPageLayout
          title="Let’s start by verifying your information"
          description="To keep your information secure, please enter these required fields."
        >
          <PageSection>
            <ExampleSection />
            <ExampleSection />
            <ExampleSection />
          </PageSection>
        </RegistrationPageLayout>
      </div>
      <div style={{ width: 375 }}>
        <Typography type="heading" level="2">
          Pre Login Page Layout
        </Typography>
        <PreLoginPageLayout
          title="Welcome back"
          description="We're here to support you along every step of the journey together."
        >
          <PageSection>
            <ExampleSection />
            <ExampleSection />
            <ExampleSection />
          </PageSection>
        </PreLoginPageLayout>
      </div>
      <div style={{ width: 375 }}>
        <Typography type="heading" level="2">
          Home Page Layout
        </Typography>
        <HomePageLayout>
          <PageSection>
            <ExampleSection />
            <ExampleSection />
            <ExampleSection />
          </PageSection>
        </HomePageLayout>
      </div>
      <div style={{ width: 375 }}>
        <Typography type="heading" level="2">
          Main Nav Page Layout
        </Typography>
        <MainNavPageLayout
          theme="healthProfileTheme"
          title="Health Profile"
          description="A detailed overview of Lisa’s needs for new providers or caregivers."
        >
          <PageSection>
            <ExampleSection />
            <ExampleSection />
            <ExampleSection />
          </PageSection>
        </MainNavPageLayout>
      </div>

      <div style={{ width: 375 }}>
        <Typography type="heading" level="2">
          Content Page Layout
        </Typography>

        <ContentPageLayout label="Label" title="Title of An Article">
          <PageSection>
            <ExampleSection />
            <ExampleSection />
            <ExampleSection />
          </PageSection>
        </ContentPageLayout>
      </div>

      <div style={{ width: 375 }}>
        <Typography type="heading" level="2">
          Terminus Page Layout
        </Typography>

        <TerminusPageLayout
          theme="dangerTheme"
          title="Delete Account"
          description="Are you sure you want to delete your account?"
        >
          <PageSection>
            <ExampleSection />
            <ExampleSection />
            <ExampleSection />
          </PageSection>
        </TerminusPageLayout>
      </div>
    </div>
  </Shell>
);

const ExampleSection: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `solid black ${tokens.borderWidthMedium}`,
        borderRadius: `${tokens.borderRadius}`,
        height: `${tokens.spacingXxxxLarge}`,
        padding: `${tokens.spacingSmall}`,
        width: '100%',
      }}
    >
      <Typography type="body" level="5">
        Example Section wrapped in PageSection
      </Typography>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
