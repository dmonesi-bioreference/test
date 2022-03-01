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
      title: '',
      content:
        '<p>Content: Quisque erat risus, mattis et elit ac, sollicitudin viverra ante. Pellentesque vulputate sodales dui vitae tincidunt. Suspendisse potenti. Nullam porta consequat ex, sit amet commodo ex laoreet eget. Aenean leo diam, mattis vitae pretium sit amet, condimentum ut mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sed tellus aliquam, semper erat non, congue quam. In aliquet mattis justo, sed tempus arcu sagittis nec. Proin nec malesuada massa, quis facilisis nunc. Pellentesque dapibus felis sit amet elit eleifend rhoncus. Pellentesque fringilla finibus massa. Suspendisse potenti.</p>',
    },
    {
      title: 'Title: What is Genetic Testing?',
      content:
        '<p>Content: Donec gravida hendrerit sem ut scelerisque. Donec at enim libero. Praesent fringilla porta nunc, quis tempus eros sollicitudin dapibus. Nullam vel lorem porta, placerat neque sed, accumsan tellus. Aliquam erat volutpat. Morbi iaculis dapibus lobortis. Donec et sollicitudin neque. Aliquam erat volutpat.</p>',
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
