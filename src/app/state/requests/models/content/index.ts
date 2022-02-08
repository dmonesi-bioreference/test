import { singleArticle, allArticles } from './article';
import { allAudios } from './audio';
import { singleFaq, allFaqs } from './faq';
import { allInternalLinkCards } from './internal-link-card';

export const all = [
  singleArticle,
  allArticles,
  singleFaq,
  allFaqs,
  allInternalLinkCards,
  allAudios,
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

  type IntroduceAt = 'WAITING' | 'READY' | 'VIEWED' | 'DISCUSSED';

  type Feature = 'RESULTS' | 'COMMUNITY';
}
