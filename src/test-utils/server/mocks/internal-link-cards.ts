import InTheNICUImage from './nicu.jpg';

const first: InternalLinkCard = {
  id: '1',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  label: 'Resources',
  title: 'Learn more about genetics',
  blurb:
    "Get a useful overview of what goes into genetic testing, what we're looking for, and how that can better inform you on what to do next.",
  published: Date.now(),
  unpublishDate: Date.now(),
  reviewByDate: Date.now(),
  introduceAt: 'WAITING' as IntroduceAt,
  owner: '',
  priority: 1
};

const second: InternalLinkCard = {
  id: '1',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  label: 'Health Profile',
  title: "Plan for your child's care",
  blurb:
    "Track and store information about your child in your Health Profile, and keep track of important details to share with people who need to know.",
  published: Date.now(),
  unpublishDate: Date.now(),
  reviewByDate: Date.now(),
  introduceAt: 'WAITING' as IntroduceAt,
  owner: '',
  priority: 1
};

export const list: InternalLinkCard[] = [first, second];

export const create = (updates: Partial<InternalLinkCard> = {}) => ({
  ...first,
  ...second,
  ...updates,
});