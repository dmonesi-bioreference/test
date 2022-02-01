import { config } from 'config';

declare global {
  interface Content {
    title: string;
    content: string;
  }

  interface ContentFailure {
    message: string;
  }

  interface Article {
    id: string;
    bannerImage?: Image;
    label: string;
    title: string;
    blurb: string;
    contents?: Content[];
    slug?: string;
    author?: string;
    published: number;
    unpublishDate?: number;
    reviewByDate?: number;
    introduceAt?: IntroduceAt;
    owner?: string;
    priority?: number;
  }

  interface FAQ {
    id: string;
    slug?: string;
    label: string;
    title: string;
    blurb: string;
    content?: Content[];
    introduceAt: IntroduceAt;
    author?: string;
    bannerImage?: Image;
    priority?: number;
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

export const isArticlePayload = (candidate: unknown): candidate is Article => {
  const articleProperties = [
    'id',
    'bannerImage',
    'label',
    'title',
    'blurb',
    'contents',
    'slug',
    'published',
    'reviewByDate',
    'owner',
  ];

  return articleProperties.every(
    (property) => property in (candidate as object)
  );
};

export const isFAQPayload = (candidate: unknown): candidate is FAQ => {
  const FAQProperties = [
    'id',
    'bannerImage',
    'label',
    'title',
    'blurb',
    'content',
    'slug',
    'author',
    'introduceAt',
  ];

  return FAQProperties.every((property) => property in (candidate as object));
};

export const isMultiArticlePayload = (
  candidate: unknown
): candidate is Article[] => {
  return (
    Array.isArray(candidate) &&
    candidate.every((member) => isArticlePayload(member))
  );
};

export const isMultiFAQPayload = (candidate: unknown): candidate is FAQ[] => {
  return (
    Array.isArray(candidate) &&
    candidate.every((member) => isFAQPayload(member))
  );
};

export const isContentFailurePayload = (
  candidate: unknown
): candidate is ContentFailure[] => {
  return (
    Array.isArray(candidate) && candidate.every((member) => 'field' in member)
  );
};

export const withDomain = (article: Article) => (
  {
    ...article,
    bannerImage: {
      ...article.bannerImage as Image,
      fullpath: `${config.pimcore.domain}${article.bannerImage?.fullpath}`,
    },
  } as Article
);