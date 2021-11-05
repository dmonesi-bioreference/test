import { Story } from '@storybook/react/types-6-0';

import AcademicResearch from 'assets/images/png/AcademicResearch.png';

import ArticleCard, { ArticleCardProps } from './ArticleCard';

export default {
  component: ArticleCard,
  title: 'Components/ArticleCard',
  parameters: {
    componentSubtitle: 'Article component for displaying images and text content',
  },
}

const Template: Story<ArticleCardProps> = (args) => (
  <ArticleCard {...args}/>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'This is a title',
  heading: 'This is a heading',
  body: 'This is body',
  imageSrc:AcademicResearch
};
