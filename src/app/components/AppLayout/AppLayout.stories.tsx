import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app';
import { PageSection, Typography } from 'components';
import { tokens } from 'styles';

import { AppLayout } from './AppLayout';

export default {
  component: AppLayout,
  title: 'App/AppLayout',
  parameters: {
    componentSubtitle: 'Defines the layout of every page.',
  },
};

const Template: Story = (args) => (
  <Shell>
    <div style={{ width: 375 }}>
      <AppLayout {...args}>
        <PageSection verticalPadding="small">
          <ExampleSection />
          <ExampleSection />
          <ExampleSection />
        </PageSection>
      </AppLayout>
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

export const HomePage = Template.bind({});

HomePage.args = {
  containsCards: true,
  kind: 'home',
  hasPatientBanner: true,
  isWithoutFooter: false,
  hasReturnLink: false,
  /** A Homepage has no label */
  /** A Homepage has no title */
  /** A Homepage has no description */
  /** A Homepage is always of default theme */
  theme: 'defaultTheme',
  hasBackgroundEllipse: false,
  isWithoutNav: false,
};

export const ContentPage = Template.bind({});

ContentPage.args = {
  containsCards: false,
  hasPatientBanner: false,
  isWithoutFooter: false,
  hasReturnLink: true,
  label: 'Title label',
  title: 'The Title of the Content',
  /** A ContentPage has no description */
  /** A ContentPage is always of resources theme */
  theme: 'resourcesTheme',
  hasBackgroundEllipse: false,
  isWithoutNav: false,
};

export const TerminusPage = Template.bind({});

TerminusPage.args = {
  containsCards: false,
  hasPatientBanner: false,
  isWithoutFooter: false,
  hasReturnLink: true,
  /** A Terminus page has no label */
  title: 'Page Title',
  description: 'Maybe there will be a description, but not always.',
  /** A Terminus page can have any theme */
  hasBackgroundEllipse: true,
  isWithoutNav: false,
};

export const MainNavPage = Template.bind({});

MainNavPage.args = {
  containsCards: true,
  hasPatientBanner: true,
  isWithoutFooter: false,
  hasReturnLink: false,
  /** A Main Nav page has no label */
  title: 'Page Title',
  description: 'Maybe there will be a description, but not always.',
  /** A Main Nav page can have any theme */
  hasBackgroundEllipse: false,
  isWithoutNav: false,
};

export const RegistrationPage = Template.bind({});

RegistrationPage.args = {
  containsCards: false,
  hasPatientBanner: false,
  isWithoutFooter: true,
  hasReturnLink: false,
  /** A Registration page has no label */
  title: 'Page Title',
  description: 'Maybe there will be a description, but not always.',
  /** A Registration page is always of default theme */
  theme: 'defaultTheme',
  hasBackgroundEllipse: true,
  isWithoutNav: true,
};

export const PreLoginPage = Template.bind({});

PreLoginPage.args = {
  containsCards: false,
  hasPatientBanner: false,
  isWithoutFooter: false,
  hasReturnLink: false,
  /** A PreLogin page has no label */
  title: 'Page Title',
  description: 'Maybe there will be a description, but not always.',
  /** A PreLogin page is always of default theme */
  theme: 'defaultTheme',
  hasBackgroundEllipse: true,
  isWithoutNav: true,
};
