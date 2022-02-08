import axios, { AxiosResponse } from 'axios';

import { server_config } from 'server_config';

import * as Queries from './queries';

const GRAPHQL_ENDPOINT = '/gdx-webservices/patient';
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export function createContentClient(overrides: Partial<Configuration>) {
  const params = { ...server_config, ...overrides };

  const client = axios.create({
    baseURL: params.services.content,
    insecureHTTPParser: true,
  });

  client.interceptors.request.use((requestConfig) => {
    requestConfig.params = {
      ...requestConfig.params,
      apikey: params.pimcore.key,
    };

    return requestConfig;
  });

  const handlers = {
    articleByUrlSlug: async (articleUrlSlug: string) =>
      await client
        .post<{ data: { getArticleListing: { edges: { node: Article }[] } } }>(
          GRAPHQL_ENDPOINT,
          { query: Queries.articleByUrlSlug(`/${articleUrlSlug}`) }
        )
        .then(responseBody)
        .then((response) => response.data.getArticleListing.edges[0].node),
    articleById: async (articleId: string) =>
      await client
        .post<{ data: { getArticle: Article } }>(GRAPHQL_ENDPOINT, {
          query: Queries.articleById(articleId),
        })
        .then(responseBody)
        .then((response) => {
          const article = response.data.getArticle;
          return {
            ...article,
            bannerImage: {
              ...(article.bannerImage as Image),
              fullpath: `${server_config.pimcore.domain ?? ''}${
                article.bannerImage?.fullpath
              }`,
            },
          };
        }),
    articles: async () =>
      await client
        .post<{ data: { getArticleListing: { edges: { node: Article }[] } } }>(
          GRAPHQL_ENDPOINT,
          { query: Queries.articles() }
        )
        .then(responseBody)
        .then((body) =>
          body.data.getArticleListing.edges.map(({ node }) => ({
            ...node,
            bannerImage: {
              ...node.bannerImage,
              fullpath: `${server_config.pimcore.domain ?? ''}${
                node.bannerImage?.fullpath
              }`,
            },
          }))
        ),
    audios: async () =>
      await client
        .post<{ data: { getAudioListing: { edges: { node: Audio }[] } } }>(
          GRAPHQL_ENDPOINT,
          { query: Queries.audios() }
        )
        .then(responseBody)
        .then((body) =>
          body.data.getAudioListing.edges.map(({ node }) => ({
            ...node,
            srcUrl: `${server_config.pimcore.domain ?? ''}${node.srcUrl}`,
          }))
        ),
    faqs: async () =>
      await client
        .post<{ data: { getPatientFAQListing: { edges: { node: FAQ }[] } } }>(
          GRAPHQL_ENDPOINT,
          { query: Queries.faqs() }
        )
        .then(responseBody)
        .then((body) =>
          body.data.getPatientFAQListing.edges.map(({ node }) => node)
        ),
    faq: async (slug: string) =>
      await client
        .post<{ data: { getPatientFAQListing: { edges: { node: FAQ }[] } } }>(
          GRAPHQL_ENDPOINT,
          {
            query: Queries.faq(`${slug}`),
          }
        )
        .then(responseBody)
        .then((response) => response.data.getPatientFAQListing.edges[0].node),
    internalLinkCards: async () =>
      await client
        .post<{ data: { getInternalLinkCardListing: { edges: { node: InternalLinkCard }[] } } }>(
          GRAPHQL_ENDPOINT,
          { query: Queries.internalLinkCards() }
        )
        .then(responseBody)
        .then((body) =>
          body.data.getInternalLinkCardListing.edges.map(({ node }) => ({
            ...node,
            bannerImage: {
              ...node.bannerImage,
              fullpath: `${server_config.pimcore.domain ?? ''}${node.bannerImage?.fullpath}`,
            }
          }))
        ),
  };

  return { client, handlers };
}
