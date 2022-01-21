const base = (givenString: string) => new URL(givenString).origin;

export const config = {
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
  type Configuration = typeof config;
}
