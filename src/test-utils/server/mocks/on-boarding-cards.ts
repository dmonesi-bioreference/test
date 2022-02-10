import InTheNICUImage from './nicu.jpg';

const first: OnBoardingCard = {
  id: '1',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  label: 'Results & Resources',
  title: 'View and learn about the genetic test results.',
  blurb:
    'We provide you with easy access to your child’s genetic test results, as well as to resources to learn about their impact. Understand what’s happening, and prepare for your child’s future.',
  unpublishDate: Date.now(),
  reviewByDate: Date.now(),
  owner: '',
  priority: 1,
};

const second: OnBoardingCard = {
  id: '2',
  bannerImage: {
    id: '1',
    filename: 'In The NICU',
    altText: 'In The NICU',
    fullpath: InTheNICUImage,
  },
  label: 'Records',
  title: 'Keep all records in one place.',
  blurb:
    'Along with your child’s genetic test results, easily keep record of their symptoms, allergies, medications and any health incidents in preparation for appointments and hospital visits.',
  unpublishDate: Date.now(),
  reviewByDate: Date.now(),
  owner: '',
  priority: 1,
};

export const list: OnBoardingCard[] = [first, second];

export const create = (updates: Partial<OnBoardingCard> = {}) => ({
  ...first,
  ...second,
  ...updates,
});
