import { Article } from 'app';

declare global {
  interface ContentFailure {
    message: string;
  }
}

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
    'publishDate',
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
