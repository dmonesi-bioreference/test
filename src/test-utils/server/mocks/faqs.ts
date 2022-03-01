import InTheNICUImage from './nicu.jpg';

export const generic: FAQ = {
  id: '1',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  slug: 'slug',
  label: 'label',
  title: 'Genetic Testing FAQs',
  blurb: 'blurb',
  content: [
    {
      title: '',
      content:
        '<p>Understanding the basic elements of genetics and the language used by clinicians will help you have a more productive conversation when your results are ready.</p>',
    },
    {
      title: 'What is Genetic Testing?',
      content:
        '<p>Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>',
    },
    {
      title: 'What is DNA?',
      content:
        '<p>Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>',
    },
  ],
  introduceAt: 'WAITING',
  author: 'author',
};

export const dna: FAQ = {
  id: '2',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  slug: 'slug',
  label: 'label',
  title: 'What is DNA?',
  blurb: 'blurb',
  content: [
    {
      title: 'Title',
      content:
        '<p>Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>',
    },
  ],
  introduceAt: 'WAITING',
  author: 'author',
};

export const list: FAQ[] = [generic, dna];

export const create = (updates: Partial<FAQ> = {}) => ({
  ...generic,
  ...updates,
});
