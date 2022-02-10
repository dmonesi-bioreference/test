export const articleByUrlSlug = (urlSlug: String) => `
  query {
    getArticleListing(filter: "{\\"slug\\":\\"${urlSlug}\\"}") {
      edges {
        node {
          id
          bannerImage {
            id
            filename
            fullpath
            mimetype
            type
            filesize
          }
          feature
          label
          title
          blurb
          contents {
            __typename
            ... on object_MediaBlock{
              id
              title
              subObject: content{
                __typename
                ... on object_Audio{
                  id
                  srcUrl
                }
                ... on object_Video{
                  id
                  srcUrl
                }
              }
            }
            ... on object_TipBlock{
              id
              title
              subObject: content{
                __typename
                ... on object_Tip{
                  id
                  content
                }
              }
            }
            ... on object_TextBlock{
              id
              title
              content
            }
          }
          slug
          author
          published
          unpublishDate
          reviewByDate
          owner
          priority
          introduceAt
        }
      }
    }
  }
`;

export const articleById = (id: String) => `
  query {
    getArticle(id: ${id}) {
      id
      bannerImage {
        id
        filename
        fullpath
        mimetype
        type
        filesize
      }
      feature
      label
      title
      blurb
      contents {
        __typename
        ... on object_MediaBlock{
          id
          title
          subObject: content{
            __typename
            ... on object_Audio{
              id
              srcUrl
            }
            ... on object_Video{
              id
              srcUrl
            }
          }
        }
        ... on object_TipBlock{
          id
          title
          subObject: content{
            __typename
            ... on object_Tip{
              id
              content
            }
          }
        }
        ... on object_TextBlock{
          id
          title
          content
        }
      }
      slug
      author
      published
      unpublishDate
      reviewByDate
      owner
      priority
      introduceAt
    }
  }
`;

export const articles = () => `
  query {
    getArticleListing {
      edges {
        node {
          id
          bannerImage {
            id
            filename
            fullpath
            mimetype
            type
            filesize
          }
          feature
          label
          title
          blurb
          contents {
            __typename
            ... on object_MediaBlock{
              id
              title
              subObject: content{
                __typename
                ... on object_Audio{
                  id
                  srcUrl
                }
                ... on object_Video{
                  id
                  srcUrl
                }
              }
            }
            ... on object_TipBlock{
              id
              title
              subObject: content{
                __typename
                ... on object_Tip{
                  id
                  content
                }
              }
            }
            ... on object_TextBlock{
              id
              title
              content
            }
          }
          slug
          author
          published
          unpublishDate
          reviewByDate
          owner
          priority
          introduceAt
        }
      }
    }
  }
`;

export const faqs = () => `
  query {
    getPatientFAQListing {
      edges {
        node {
          id
          slug
          content {
            title
            content
          }
          introduceAt
          priority
          label
          title
          author
          classname
          bannerImage {
            id
          }
          blurb
        }
      }
    }
  }
`;

export const faq = (slug: String) => `
  query {
    getPatientFAQListing(filter: "{\\"slug\\":\\"/${slug}\\"}") {
      edges {
        node {
          id
          slug
          content {
            title
            content
          }
          introduceAt
          priority
          label
          title
          author
          classname
          bannerImage {
            id
          }
          blurb
        }
      }
    }
  }
`;

export const internalLinkCards = () => `
  query {
    getInternalLinkCardListing {
      edges {
        node {
          id
          bannerImage {
            id
            filename
            fullpath
            mimetype
            type
            filesize
          }
          label
          title
          blurb
          author
          published
          unpublishDate
          reviewByDate
          owner
          priority
          introduceAt
        }
      }
    }
  }
`;

export const audios = () => `
  query {
    getAudioListing{
      edges {
        node {
          id
          introduceAt
          priority
          label
          name
          author
          blurb
          srcUrl
          altText
          content {
            title
            content
          }
        }
      }
    }
  }
`;

export const onBoardingCards = () => `
  query {
    getOnboardingStoryCardListing{
      edges {
        node {
          id
          title
          bannerImage {
            id
            filename
            fullpath
            mimetype
            type
            filesize
          }
          priority
          label
          author
          blurb
          owner
          reviewByDate
          unpublishDate
        }
      }
    }
  }
`;
