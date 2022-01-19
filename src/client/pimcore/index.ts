import axios, { AxiosResponse } from "axios";

import { ArticleQueryResponse, ArticlesQueryResponse } from "./pimcore-article-mapper";
import { ArticleQuery, ArticlesQuery, FAQQuery } from "./schema";

import { FAQQueryResponse } from ".";

export * from './helper';
export * from './pimcore-article-mapper';
export * from './pimcore-faq-mapper';

const instance = axios.create({
  baseURL: `${process.env.PIMCORE_URL}?`
});

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const Resources = {
  article: (articleId: string) => {
    return instance.post<{ data: ArticleQueryResponse }>(' ', { query: ArticleQuery.replace('$id', articleId) }).then(responseBody);
  },
  articles: () => {
    return instance.post<{ data: ArticlesQueryResponse }>(' ', { query: ArticlesQuery }).then(responseBody);
  },
  faqs: () => {
    return instance.post<{ data: FAQQueryResponse }>(' ', { query: FAQQuery }).then(responseBody);
  },
}

instance.interceptors.request.use(config => {
  config.params = {
    'apikey': process.env.PIMCORE_KEY
  };

  config.insecureHTTPParser = true;

  return config;
});

const Pimcore = {
  Resources
}

export default Pimcore;
