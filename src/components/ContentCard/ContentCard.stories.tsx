import { Story } from '@storybook/react/types-6-0';

import AcademicResearch from 'assets/images/png/AcademicResearch.png';

import ContentCard, { ContentCardProps } from './ContentCard';

export default {
  component: ContentCard,
  title: 'Components/ContentCard',
  parameters: {
    componentSubtitle: 'Article card for displaying images and text content',
  },
};

const Template: Story<ContentCardProps> = (args) => <ContentCard {...args} />;

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

export const OnBoarding = Template.bind({});

Link.args = {
  variant: 'onboarding',
  imageSrc: AcademicResearch,
  label: 'Community',
  heading: 'Find others like you',
  body: 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
};
