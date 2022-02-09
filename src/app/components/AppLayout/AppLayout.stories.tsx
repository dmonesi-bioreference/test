import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app';
import { Typography } from 'components';
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
        <ExampleSection />
        <ExampleSection />
        <ExampleSection />
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
        width: '100%',
      }}
    >
      <Typography type="heading" level="3">
        Example Section
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
