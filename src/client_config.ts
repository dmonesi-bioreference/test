export const client_config = {
  api: {
    host: process.env.NEXT_PUBLIC_API_HOST || '',
  },
  gtm: {
    id: process.env.NEXT_PUBLIC_GTM_ID,
  },
};
