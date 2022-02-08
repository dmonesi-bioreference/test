export const single: Audio = {
  id: '1',
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
