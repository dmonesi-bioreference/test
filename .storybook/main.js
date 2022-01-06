const path = require('path');
const tsConfig = require('../tsconfig.json');

module.exports = {
  stories: ['../**/*.stories.@(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    ],
  }),
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '..', tsConfig.compilerOptions.baseUrl),
    ];
    return config;
  },
};
