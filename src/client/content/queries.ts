export const article = (id: String) => `
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
      label
      title
      blurb
      contents {
        __typename
        ... on object_TextBlock {
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
          label
          title
          blurb
          contents {
            __typename
            ... on object_TextBlock {
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
