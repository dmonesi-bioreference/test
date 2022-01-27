import { Story } from '@storybook/react/types-6-0';

import { AppImage } from '../AppImage';

import ContentBlock, { ContentBlockProps } from './ContentBlock';

export default {
  component: ContentBlock,
  title: 'Components/ContentBlock',
  parameters: {
    componentSubtitle: 'Layout for a block of content with an optional title.',
  },
};

const TextBlocks: Story<ContentBlockProps> = (args) => (
  <div>
    <ContentBlock {...args}>
      Here is a paragraph of text content that demonstrates the layout and
      character width of a block.
    </ContentBlock>
  </div>
);

export const Text = TextBlocks.bind({});

Text.args = { title: 'Content Block: Text', scale: 'small' };

const ImageBlocks: Story<ContentBlockProps> = (args) => (
  <div>
    <ContentBlock {...args}>
      <AppImage src="https://picsum.photos/300/150" />
    </ContentBlock>
  </div>
);

export const Image = ImageBlocks.bind({});

Image.args = { title: 'Content Block: Image', scale: 'small' };
