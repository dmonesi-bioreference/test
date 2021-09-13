import { Story } from '@storybook/react/types-6-0';

import { List, Typography } from 'components';

import InformationBanner, { InformationBannerProps } from './InformationBanner';

export default {
  component: InformationBanner,
  title: 'Components/InformationBanner',
  parameters: {
    componentSubtitle: 'Display information to users.',
  },
};

const Template: Story<InformationBannerProps> = (args) => (
  <div style={{ width: 300 }}>
    <InformationBanner {...args}>
      <List>
        <Typography type="list">Lorem ipsum dolor set amet.</Typography>
        <Typography type="list">Lorem ipsum dolor set amet.</Typography>
        <Typography type="list">Lorem ipsum dolor set amet.</Typography>
      </List>
    </InformationBanner>
  </div>
);

export const Primary = Template.bind({});

Primary.args = { title: 'Your strong password must include:' };
