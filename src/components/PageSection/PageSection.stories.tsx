import { Story } from '@storybook/react/types-6-0';

import { Card, Icon, Typography } from 'components';

import PageSection from './PageSection';

export default {
  component: PageSection,
  title: 'Components/PageSection',
  parameters: {
    componentSubtitle: 'Defines a section on a page.',
  },
};

const Template: Story = (args) => (
  <div style={{ width: 343 }}>
    <PageSection header={factHeader} {...args}>
      <Card>
        <div style={{ marginBottom: 32 }}>
          <Typography type="heading" level="2">
            Whole Genome Sequencing
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: 24 }}>
            <Icon name="atom" kind="custom" />
          </div>
          <Typography type="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text.
          </Typography>
        </div>
      </Card>
    </PageSection>
  </div>
);

const factHeader = (
  <Typography type="heading" level="2">
    The science
  </Typography>
);

export const Primary = Template.bind({});

Primary.args = {};
