const httpsOnly = process.env.NODE_ENV == 'production' ? 'https:' : '';
const scriptUnsafeEval = process.env.NODE_ENV == 'production' ? '' : '\'unsafe-eval\'';
const cssUnsafeInline = process.env.NODE_ENV == 'production' ? '\'unsafe-inline\'' : '\'unsafe-inline\'';
const ContentSecurityPolicy = `
  navigate-to ${httpsOnly} ${process.env.AUTH0_ISSUER_BASE_URL};
  default-src 'none';
  child-src 'none';
  connect-src 'self' https://www.googletagmanager.com https://tagmanager.google.com https://cdn.cookielaw.org https://www.google-analytics.com https://*.onetrust.com;
  font-src 'self' https://fonts.gstatic.com data:;
  frame-src 'none';
  img-src 'self' data: https://*.genedx.com https://ssl.gstatic.com https://www.gstatic.com;
  object-src 'none';
  script-src 'nonce-%REPLACE_WITH_NONCE%' 'strict-dynamic' 'self' https://tagmanager.google.com ${scriptUnsafeEval};
  style-src 'self' https://tagmanager.google.com https://fonts.googleapis.com ${cssUnsafeInline};
  form-action 'self';
  frame-ancestors 'none';
  base-uri 'self';
  worker-src 'none';
  manifest-src 'self';
  prefetch-src 'self' ;
`

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          },

          // The following are not strictly necessary with a strong CSP
          // but were either identified by NetSparker or Mozilla Observatory
          {
            // Don't let the page render within an iframe
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            // Prevents page load when reflected XSS attacks
            // are detected
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            // Don't let the browser guess content types
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            // Reduces amount of information included in the referrer header
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin' // TODO: will this upset GTM
          },
          {
            // Don't let HTTPS pages request HTTP content
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['genedx2020.local', 'qa.genedx.com'],
    loader: 'custom',
  },
  webpack(config, options) {
    const { dev, isServer } = options;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    if (dev && isServer) {
      const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
