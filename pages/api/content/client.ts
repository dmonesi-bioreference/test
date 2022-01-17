import { createClient } from '@urql/core';

export const client = createClient({
  url: `${process.env.PIMCORE_URL}?apikey=${process.env.PIMCORE_KEY}`,
});
