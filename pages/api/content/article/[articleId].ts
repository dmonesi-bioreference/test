import { createClient, gql } from '@urql/core';
import type { NextApiRequest, NextApiResponse } from 'next';

import { mockArticle } from 'app/state/content/models';
import { transformToArticle } from 'client';

const ArticleQuery = (id: string) => {
  return gql`
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
  `
};

const client = createClient({
  url: `${process.env.PIMCORE_URL}?apikey=${process.env.PIMCORE_KEY}`,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;

  if (!process.env.PIMCORE_KEY) return res.status(200).json(mockArticle);
  const result = await client
    .query(ArticleQuery(query['articleId'] as string))
    .toPromise()
    .then((result) => {
      return transformToArticle(result.data);
    });
  res.status(200).json(result);
}
