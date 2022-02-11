import { Story } from '@storybook/react/types-6-0';

import Container, { ContainerProps } from './Container';

export default {
  component: Container,
  title: 'Components/Container',
  parameters: {
    componentSubtitle: 'A generic container used to wrap other content.',
  },
};

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <div>Hello world.</div>
  </Container>
);

export const Primary = Template.bind({});

Primary.args = {};
