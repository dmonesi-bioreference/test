import InTheNICUImage from './nicu.jpg';

export const single: Avatar = {
  avatar: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
};

export const list: Avatar[] = [single];

export const create = (updates: Partial<Avatar> = {}) => ({
  ...single,
  ...updates,
});
