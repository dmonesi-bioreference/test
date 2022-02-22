import { Story } from '@storybook/react/types-6-0';

import { Icon } from 'components/Icon';

import Accordion, { AccordionProps } from './Accordion';

export default {
  component: Accordion,
  title: 'Components/Accordion',
  parameters: {
    componentSubtitle: 'A collapsable accordion component with a heading and a body.',
  },
}

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args} />
);

export const Single = Template.bind({});

Single.args = {
  heading: 'Heading',
  body: 'Accordion body',
};

export const WithPrefixIcon = Template.bind({});

WithPrefixIcon.args = {
  icon: <Icon name="exclamation-circle" />,
  heading: 'Heading',
  body: 'Accordion body',
};
