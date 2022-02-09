import InTheNICUImage from './nicu.jpg';

export const single: Article = {
  id: '1',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  label: 'Preparing For Results (Mock Article)',
  title: 'What to expect from the test results',
  blurb:
    "A genetic test report contains a lot of important information. We'll break down the key terms for you so you can understand them better.",
  contents: [
    {
      title: 'Title',
      content: '<p>Content</p>',
    },
  ],
  slug: 'slug',
  published: Date.now(),
  reviewByDate: Date.now(),
  owner: '',
};

export const list: Article[] = [single];

export const create = (updates: Partial<Article> = {}) => ({
  ...single,
  ...updates,
});
