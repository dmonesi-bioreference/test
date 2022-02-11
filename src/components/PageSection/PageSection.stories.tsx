import { Story } from '@storybook/react/types-6-0';

import { ContentCard } from 'components';

import PageSection from './PageSection';

export default {
  component: PageSection,
  title: 'Components/PageSection',
  parameters: {
    componentSubtitle: 'Defines a section on a page.',
  },
};

const Template: Story = (args) => (
  <PageSection title="Read" {...args}>
    <ContentCard
      imageSrc="https://picsum.photos/300/150"
      variant="article"
      label="Article"
      heading="An Interesting Topic"
      body="Lorem ipsum is simply dummy text used by the print industry. Lorem ipsum dolor set amet."
      footer="Read more"
    />
    <ContentCard
      imageSrc="https://picsum.photos/300/150"
      variant="article"
      label="Article"
      heading="An Interesting Topic"
      body="Lorem ipsum is simply dummy text used by the print industry. Lorem ipsum dolor set amet."
      footer="Read more"
    />
  </PageSection>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Read',
  spacing: 'small',
  verticalPadding: 'small',
  centered: true,
};
