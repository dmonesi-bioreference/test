export const ArticleQuery = `
  query {
    getArticle(id: $id) {
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
      content
      slug {
        slug
      }
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

export const ArticlesQuery = `
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
        content
        slug {
          slug
        }
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

export const FAQQuery = `
  query {
    getPatientFAQListing {
      edges {
        node {
          id
          slug {
            slug
          }
          content
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