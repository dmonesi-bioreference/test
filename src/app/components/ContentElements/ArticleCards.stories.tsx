import { Story } from '@storybook/react/types-6-0';
import { useEffect } from 'react';

import { useAppEvents, Shell } from 'app/components/Shell';
import { colors } from 'styles';
import { Mocks } from 'test-utils/server/mocks';

import { ArticleCards } from './ArticleCards';

export default {
  component: ArticleCards,
  title: 'App/ArticleCards',
  parameters: {
    componentSubtitle: 'Article cards and carousel for pages',
  },
};

const LoadMockArticles = () => {
  const { allArticlesRequest } = useAppEvents();

  useEffect(allArticlesRequest, [allArticlesRequest]);

  return null;
};

const Template: Story = (args) => {
  return (
    <div style={{ background: colors.grey[300], padding: '24px' }}>
      <Shell requests={{ allArticles: async () => Mocks.article.list }}>
        <ArticleCards {...args}></ArticleCards>
        <LoadMockArticles />
      </Shell>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
