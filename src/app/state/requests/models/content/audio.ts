declare global {
  interface Audio {
    id: string;
    avatar: Image;
    introduceAt: IntroduceAt;
    priority: number;
    label: string;
    name: string;
    author: string;
    blurb: string;
    srcUrl: string;
    altText: string;
    content?: Content[];
  }

  interface RequestModelMap {
    allAudios: Audio[];
  }
}

export const allAudios: RequestModels['allAudios'] = {
  key: 'allAudios',
  init: [],
};
