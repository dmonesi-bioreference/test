import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';

export interface Article {
  id: string;
  bannerImage: Image;
  label: string;
  title: string;
  blurb: string;
  content: Array<TextBlock>;
  slug: string;
  author?: string;
  publishDate: number;
  unPublishDate?: number;
  reviewByDate: number;
  introduceAt?: IntroduceAt;
  owner: string;
  feature?: Feature;
  priority?: number;
}

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

export interface Image {
  id: string;
  name: string;
  altText: string;
  srcUrl: string | StaticImport;
  owner: string;
}

export interface Audio {
  id: string;
  name: string;
  title: string;
  blurb: string;
  srcUrl: string;
  transcript: string;
  publishDate: number;
  unPublishDate?: number;
  reviewByDate: number;
  introduceAt?: IntroduceAt;
  owner: string;
  priority?: number;
}

export interface TextBlock {
  title?: string;
  content: string;
}

export type IntroduceAt = 'WAITING' | 'READY' | 'VIEWED' | 'DISCUSSED';

export type Feature = 'RESULTS' | 'COMMUNITY';

export const mockArticle: Article = {
  id: '1',
  bannerImage: {
    id: '1',
    name: 'In The NICU',
    altText: 'In The NICU',
    srcUrl: InTheNICUImage,
    owner: '',
  },
  label: 'Preparing For Results',
  title: 'What to expect from the test results',
  blurb: '',
  content: [
    {
      title: '',
      content:
        'A genetic test report contains a lot of important information. We’ll break down the key terms for you so you can understand them better.',
    },
  ],
  slug: 'slug',
  publishDate: Date.now(),
  reviewByDate: Date.now(),
  owner: 'owner',
};
