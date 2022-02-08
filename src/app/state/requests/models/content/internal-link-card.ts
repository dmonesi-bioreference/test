declare global {
  interface InternalLinkCard {
    id: string;
    bannerImage?: Image;
    label: string;
    title: string;
    blurb: string;
    author?: string;
    published: number;
    unpublishDate?: number;
    reviewByDate?: number;
    introduceAt?: IntroduceAt;
    owner?: string;
    priority?: number;
  }

  interface RequestModelMap {
    allInternalLinkCards: InternalLinkCard[];
  }
}

export const allInternalLinkCards: RequestModels['allInternalLinkCards'] = {
  key: 'allInternalLinkCards',
  init: [],
};
