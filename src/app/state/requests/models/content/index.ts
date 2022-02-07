import { singleArticle, allArticles } from './article';
import { singleFaq, allFaqs } from './faq';

export const all = [
  singleArticle,
  allArticles,
  singleFaq,
  allFaqs,
];

declare global {
  interface Content {
    title: string;
    content: string;
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