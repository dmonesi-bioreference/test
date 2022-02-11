import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app';
import { PageSection, Typography } from 'components';
import { tokens } from 'styles';

import { AppLayout } from './AppLayout';

export default {
  component: AppLayout,
  title: 'Components/AppLayout',
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

export const Primary = Template.bind({});

Primary.args = {};

export const HomePage = Template.bind({});

HomePage.args = {
  containsCards: true,
  kind: 'home',
  hasPatientBanner: true,
  isWithoutFooter: false,
};
