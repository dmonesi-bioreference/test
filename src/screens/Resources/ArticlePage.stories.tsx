import { Story } from '@storybook/react/types-6-0';

import { Shell } from 'app/components/Shell';
import { ArticlePage } from 'screens/Resources/ArticlePage';
import { Mocks } from 'test-utils/server/mocks';

export default {
  component: ArticlePage,
  title: 'Screens/ArticlePage',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story = () => (
  <Shell
    requests={{
      singleArticle: async () => Mocks.article.single,
    }}
  >
    <ArticlePage articleIdentifier="slug" />
  </Shell>
);

export const Primary: Story = Template.bind({});

Primary.args = {};
