import { Story } from '@storybook/react/types-6-0';

import AcademicResearch from 'assets/images/png/AcademicResearch.png';

import LinkCard, { LinkCardProps } from './LinkCard';

export default {
  component: LinkCard,
  title: 'Components/LinkCard',
  parameters: {
    componentSubtitle: 'Article card for displaying images and text content',
  },
};

const Template: Story<LinkCardProps> = (args) => <LinkCard {...args} />;

export const Article = Template.bind({});

Article.args = {
  variant: 'article',
  label: 'This is a label',
  heading: 'This is a heading',
  body: 'This is body',
  imageSrc: AcademicResearch,
};

export const Link = Template.bind({});

Link.args = {
  variant: 'link',
  imageSrc: AcademicResearch,
  prefixIcon: 'community',
  label: 'Community',
  href: '#',
  heading: 'Find others like you',
  body: 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
};
