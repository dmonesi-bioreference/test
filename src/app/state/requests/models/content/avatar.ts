declare global {
  interface Avatar {
    avatar?: Image;
  }

  interface RequestModelMap {
    allAvatars: Avatar[];
  }
}

export const allAvatars: RequestModels['allAvatars'] = {
  key: 'allAvatars',
  init: [],
};
