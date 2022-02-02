const domain = (givenString: string) => new URL(givenString).host;
const base = (givenString: string) => new URL(givenString).origin;

export const server_config = {
  identity: {
    domain: domain(process.env.AUTH0_ISSUER_BASE_URL || 'http://localhost'),
    id: process.env.IDENTITY_CLIENT_ID || '',
    secret: process.env.IDENTITY_CLIENT_SECRET || '',
    scope: process.env.IDENTITY_CLIENT_SCOPE || 'read:users',
  },
  pimcore: { key: process.env.PIMCORE_KEY },
  services: {
    provider: base(process.env.PROVIDER_PORTAL_BASE_URL || 'http://localhost'),
    content: base(process.env.PIMCORE_URL || 'http://localhost'),
  },
  provider: {
    referer: process.env.PROVIDER_PORTAL_API_REFERER,
    username: process.env.PROVIDER_PORTAL_API_BASIC_AUTH_USERNAME,
    password: process.env.PROVIDER_PORTAL_API_BASIC_AUTH_PASSWORD,
  },
};

declare global {
  type Configuration = typeof server_config;
}
