import { gql } from '@urql/core';
import type { NextApiRequest, NextApiResponse } from 'next';

import { mockFAQs } from 'app/state/content/models';
import { transformToFAQs } from 'client';

import { client } from './client';

const FAQQuery = gql`
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.PIMCORE_KEY) return res.status(200).json(mockFAQs);
  const result = await client
    .query(FAQQuery)
    .toPromise()
    .then((result) => {
      return transformToFAQs(result.data);
    });
  res.status(200).json(result);
}
