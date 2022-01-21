import InTheNICUImage from './nicu.jpg';

export const generic: FAQ = {
  id: '1',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  slug: { slug: 'slug' },
  label: 'label',
  title: 'What is Genetic Testing?',
  blurb: 'blurb',
  content:
    'Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
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
  slug: { slug: 'slug' },
  label: 'label',
  title: 'What is DNA?',
  blurb: 'blurb',
  content:
    'Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
  introduceAt: 'WAITING',
  author: 'author',
};

export const list: FAQ[] = [generic, dna];
