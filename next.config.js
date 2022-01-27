/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
module.exports = {
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
