import InTheNICUImage from './nicu.jpg';

export const single: Audio = {
  id: '1',
  avatar: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  label: 'Genetic counselor support',
  name: 'Genetic counselor support',
  blurb: 'Learn about what to expect',
  content: [{ title: 'Title', content: 'This is the transcript' }],
  introduceAt: 'WAITING',
  priority: 1,
  altText: '',
  author: '',
  srcUrl: '',
};

export const list: Audio[] = [single];

export const create = (updates: Partial<Audio> = {}) => ({
  ...single,
  ...updates,
});
