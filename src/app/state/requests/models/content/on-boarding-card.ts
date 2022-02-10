declare global {
  interface OnBoardingCard {
    id: string;
    bannerImage?: Image;
    label: string;
    title: string;
    blurb: string;
    author?: string;
    unpublishDate?: number;
    reviewByDate?: number;
    owner?: string;
    priority?: number;
  }

  interface RequestModelMap {
    allOnBoardingCards: OnBoardingCard[];
  }
}

export const allOnBoardingCards: RequestModels['allOnBoardingCards'] = {
  key: 'allOnBoardingCards',
  init: [],
};
