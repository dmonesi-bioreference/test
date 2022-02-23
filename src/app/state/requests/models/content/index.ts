import { singleArticle, allArticles } from './article';
import { allAudios } from './audio';
import { allAvatars } from './avatar';
import { singleFaq, allFaqs } from './faq';
import { allInternalLinkCards } from './internal-link-card';
import { allOnBoardingCards } from './on-boarding-card';

export const all = [
  singleArticle,
  allArticles,
  singleFaq,
  allFaqs,
  allInternalLinkCards,
  allAudios,
  allOnBoardingCards,
  allAvatars,
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

  type Feature = 'RESULT' | 'COMMUNITY';
}
