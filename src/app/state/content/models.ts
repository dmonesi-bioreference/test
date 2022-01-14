import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';

declare global {
  interface ContentFailure {
    message: string;
  }

  interface Article {
    id: string;
    bannerImage: Image;
    label: string;
    title: string;
    blurb: string;
    content: string;
    slug: Slug;
    author?: string;
    published: number;
    unpublishDate?: number;
    reviewByDate: number;
    introduceAt?: IntroduceAt;
    owner: string;
    priority?: number;
  }

  interface Slug {
    slug: string;
  }

  interface Image {
    id: string;
    filename: string;
    fullpath: string | StaticImageData;
    mimetype?: string;
    type?: string;
    filesize?: string;
    altText?: string;
  }

  interface Audio {
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

  type IntroduceAt = 'WAITING' | 'READY' | 'VIEWED' | 'DISCUSSED';

  type Feature = 'RESULTS' | 'COMMUNITY';
}

export const mockArticle: Article = {
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
    'A genetic test report contains a lot of important information. We’ll break down the key terms for you so you can understand them better.',
  content: 'Content',
  slug: { slug: 'slug' },
  published: Date.now(),
  reviewByDate: Date.now(),
  owner: '',
};

export const isArticlePayload = (
  candidate: unknown
): candidate is Article[] => {
  const articleProperties = [
    'id',
    'bannerImage',
    'label',
    'title',
    'blurb',
    'content',
    'slug',
    'published',
    'reviewByDate',
    'owner',
  ];
  return (
    Array.isArray(candidate) &&
    candidate.every((member) =>
      articleProperties.every((property) => property in member)
    )
  );
};

export const isArticleFailurePayload = (
  candidate: unknown
): candidate is ContentFailure[] => {
  return (
    Array.isArray(candidate) && candidate.every((member) => 'field' in member)
  );
};