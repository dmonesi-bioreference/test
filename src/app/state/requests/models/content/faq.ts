declare global {
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

  interface RequestModelMap {
    singleFaq: FAQ;
    allFaqs: FAQ[];
  }
}

export const singleFaq: RequestModels['singleFaq'] = {
  key: 'singleFaq',
  init: {
    id: '',
    label: '',
    title: '',
    blurb: '',
    introduceAt: 'WAITING',
  },
};

export const allFaqs: RequestModels['allFaqs'] = {
  key: 'allFaqs',
  init: [],
};
