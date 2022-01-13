import { createClient, gql } from '@urql/core';
import type { NextApiRequest, NextApiResponse } from 'next';

import { mockArticle } from 'app/state/content/models';
import { transformToArticles } from 'client';

const ArticlesQuery = gql`
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

const client = createClient({
  url: `${process.env.PIMCORE_URL}?apikey=${process.env.PIMCORE_KEY}`,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.PIMCORE_KEY) return res.status(200).json([mockArticle]);
  const result = await client
    .query(ArticlesQuery)
    .toPromise()
    .then((result) => {
      return transformToArticles(result.data);
    });
  res.status(200).json(result);
}
