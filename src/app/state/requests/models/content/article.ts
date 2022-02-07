declare global {
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

  interface RequestModelMap {
    singleArticle: Article;
    allArticles: Article[];
  }
}

export const singleArticle: RequestModels['singleArticle'] = {
  key: 'singleArticle',
  init: {
    id: '',
    label: '',
    title: '',
    blurb: '',
    published: 0,
  },
};

export const allArticles: RequestModels['allArticles'] = {
  key: 'allArticles',
  init: [],
};
