import { Story } from '@storybook/react/types-6-0';

import { Button, List, Typography } from 'components';
import { tokens } from 'styles';

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

const Invalid: Story<InformationBannerProps> = (args) => (
  <div style={{ width: 300 }}>
    <InformationBanner {...args}>
      <div style={{ marginBottom: tokens.spacing }}>
        <Typography type="body">
          Please check them over and try again. You have <strong>4</strong>{' '}
          authentication attempts left.
        </Typography>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button kind="link-medium">Get some help</Button>
      </div>
    </InformationBanner>
  </div>
);

export const Error = Invalid.bind({});

Error.args = {
  title: 'Those details don’t match our records.',
  type: 'error',
};
